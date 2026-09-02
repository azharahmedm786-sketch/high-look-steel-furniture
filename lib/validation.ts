export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
export const MAX_FILES = 5;
export const MAX_FILE_SIZE_MB = 8;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export interface RequestFormValues {
  name: string;
  phone: string;
  service: string;
  requirement: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export type RequestFormErrors = Partial<Record<keyof RequestFormValues, string>>;

/** Basic Indian mobile number check: 10 digits, optionally with +91 / 0 prefix. */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d]/g, "");
  const trimmed = digits.startsWith("91") && digits.length === 12 ? digits.slice(2) : digits;
  const local = trimmed.startsWith("0") ? trimmed.slice(1) : trimmed;
  return /^[6-9]\d{9}$/.test(local);
}

export function validateRequestForm(values: RequestFormValues): RequestFormErrors {
  const errors: RequestFormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (!isValidPhone(values.phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }
  if (!values.service) {
    errors.service = "Select a service.";
  }
  if (!values.requirement.trim() || values.requirement.trim().length < 5) {
    errors.requirement = "Describe what you need in a few words.";
  }
  if (!values.location.trim()) {
    errors.location = "Enter your area or locality.";
  }

  return errors;
}

export interface FileValidationResult {
  accepted: File[];
  rejected: { file: File; reason: string }[];
}

export function validateFiles(files: File[], existingCount: number): FileValidationResult {
  const accepted: File[] = [];
  const rejected: FileValidationResult["rejected"] = [];
  let count = existingCount;

  for (const file of files) {
    if (count >= MAX_FILES) {
      rejected.push({ file, reason: `Maximum ${MAX_FILES} photos allowed.` });
      continue;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      rejected.push({ file, reason: "Only JPG, PNG, or WEBP files are accepted." });
      continue;
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      rejected.push({ file, reason: `File exceeds ${MAX_FILE_SIZE_MB}MB.` });
      continue;
    }
    accepted.push(file);
    count += 1;
  }

  return { accepted, rejected };
}
