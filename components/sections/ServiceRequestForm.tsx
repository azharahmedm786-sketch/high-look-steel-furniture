"use client";

import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { services } from "@/data/services";
import {
  validateFiles,
  validateRequestForm,
  ACCEPTED_IMAGE_TYPES,
  MAX_FILES,
  MAX_FILE_SIZE_MB,
  type RequestFormErrors,
  type RequestFormValues,
} from "@/lib/validation";
import { UploadIcon, CheckIcon, CloseIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const emptyValues: RequestFormValues = {
  name: "",
  phone: "",
  service: "",
  requirement: "",
  location: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function ServiceRequestForm({ presetService }: { presetService?: string }) {
  const [values, setValues] = useState<RequestFormValues>({
    ...emptyValues,
    service: presetService || "",
  });
  const [errors, setErrors] = useState<RequestFormErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [fileErrors, setFileErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [startedTracked, setStartedTracked] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  function markStarted() {
    if (!startedTracked) {
      trackEvent("service_request_started");
      setStartedTracked(true);
    }
  }

  function update<K extends keyof RequestFormValues>(key: K, value: RequestFormValues[K]) {
    markStarted();
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function handleFiles(fileList: FileList | null) {
    if (!fileList) return;
    markStarted();
    const { accepted, rejected } = validateFiles(Array.from(fileList), files.length);
    if (accepted.length) setFiles((prev) => [...prev, ...accepted]);
    setFileErrors(rejected.map((r) => `${r.file.name}: ${r.reason}`));
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateRequestForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!endpoint) {
      // No backend is connected yet. We don't fake a submission — see
      // README "Connecting the request form" for how to wire this up.
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      files.forEach((file) => formData.append("photos", file));

      const res = await fetch(endpoint, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      trackEvent("service_request_submitted", { service: values.service });
      setValues(emptyValues);
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-line bg-surface p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp/10 text-whatsapp">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight">Request sent.</h3>
        <p className="text-sm text-ink-soft">
          We&apos;ve received your request and will get back to you shortly. For anything urgent, call
          or WhatsApp us directly.
        </p>
        <Button variant="secondary" onClick={() => setStatus("idle")}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {!endpoint && status === "error" ? (
        <div className="border border-red/30 bg-red/5 p-4 text-sm text-red">
          Online submission isn&apos;t connected yet. Please call or WhatsApp us instead — your
          details below haven&apos;t been lost.
        </div>
      ) : null}
      {endpoint && status === "error" ? (
        <div className="border border-red/30 bg-red/5 p-4 text-sm text-red">
          Something went wrong sending your request. Please try again, or call/WhatsApp us
          directly.
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
            autoComplete="name"
          />
        </Field>
        <Field label="Phone" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass(!!errors.phone)}
            autoComplete="tel"
          />
        </Field>
      </div>

      <Field label="Service" htmlFor="service" error={errors.service}>
        <select
          id="service"
          name="service"
          value={values.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass(!!errors.service)}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Requirement / Problem" htmlFor="requirement" error={errors.requirement}>
        <textarea
          id="requirement"
          name="requirement"
          rows={3}
          value={values.requirement}
          onChange={(e) => update("requirement", e.target.value)}
          className={inputClass(!!errors.requirement)}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Location" htmlFor="location" error={errors.location}>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Area / locality"
            value={values.location}
            onChange={(e) => update("location", e.target.value)}
            className={inputClass(!!errors.location)}
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Preferred Date" htmlFor="preferredDate">
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              value={values.preferredDate}
              onChange={(e) => update("preferredDate", e.target.value)}
              className={inputClass(false)}
            />
          </Field>
          <Field label="Preferred Time" htmlFor="preferredTime">
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              value={values.preferredTime}
              onChange={(e) => update("preferredTime", e.target.value)}
              className={inputClass(false)}
            />
          </Field>
        </div>
      </div>

      <Field label="Message (optional)" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={3}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <div>
        <span className="mb-2 block text-sm font-medium text-ink">Upload Photos (optional)</span>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 border border-dashed border-ink/25 bg-surface px-4 py-8 text-sm text-ink-soft transition-colors hover:border-ink/40"
        >
          <UploadIcon className="h-5 w-5" />
          Add up to {MAX_FILES} photos (JPG, PNG, WEBP — max {MAX_FILE_SIZE_MB}MB each)
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPTED_IMAGE_TYPES.join(",")}
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {files.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center gap-2 border border-line bg-bg px-3 py-1.5 text-xs text-ink-soft"
              >
                {file.name}
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => removeFile(index)}
                  className="text-ink-soft hover:text-red"
                >
                  <CloseIcon className="h-3 w-3" />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        {fileErrors.length > 0 ? (
          <ul className="mt-2 space-y-1">
            {fileErrors.map((err) => (
              <li key={err} className="text-xs text-red">
                {err}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-ink ${
    hasError ? "border-red" : "border-line"
  }`;
}
