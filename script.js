import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const menuBtn=document.querySelector(".menu-btn"),mobileMenu=document.querySelector(".mobile-menu");
menuBtn?.addEventListener("click",()=>{const open=mobileMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);mobileMenu.setAttribute("aria-hidden",!open)});
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>{mobileMenu.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")}));

const ba=document.querySelector(".ba-wrap"), after=document.querySelector(".after"), divider=document.querySelector(".ba-divider");
let dragging=false;
function setBA(x){if(!ba)return;const r=ba.getBoundingClientRect();let p=Math.max(8,Math.min(92,((x-r.left)/r.width)*100));ba.style.setProperty("--p", p + "%")}
ba?.addEventListener("pointerdown",e=>{dragging=true;ba.setPointerCapture(e.pointerId);setBA(e.clientX)});
ba?.addEventListener("pointermove",e=>{if(dragging)setBA(e.clientX)});
ba?.addEventListener("pointerup",()=>dragging=false);
ba?.addEventListener("pointercancel",()=>dragging=false);

document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;document.querySelectorAll(".gallery-card").forEach(card=>card.classList.toggle("hide",f!=="all"&&card.dataset.cat!==f))}));

const lightbox=document.querySelector(".lightbox"), lightVisual=document.querySelector(".lightbox-visual"), lightTitle=document.querySelector(".lightbox h3");
document.querySelectorAll(".gallery-card").forEach(card=>card.addEventListener("click",()=>{lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");lightTitle.textContent=card.dataset.title;lightVisual.className="lightbox-visual "+card.querySelector(".visual").className.replace("visual ","visual-")}));
document.querySelector(".lightbox-close")?.addEventListener("click",()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")});
lightbox?.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("open")});

document.querySelectorAll("[data-service]").forEach(link=>link.addEventListener("click",()=>{const select=document.querySelector('select[name="service"]');if(select)select.value=link.dataset.service}));

document.querySelector("#enquiry-form")?.addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.currentTarget;
  const f = new FormData(form);
  const name = f.get("name"), phone = f.get("phone"), service = f.get("service"), message = f.get("message");

  const feedback = document.getElementById("form-feedback");
  const btn = form.querySelector('button[type="submit"]');

  // Basic Validation
  if (!name || !phone) {
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#ffebee";
    feedback.style.color = "#c62828";
    feedback.textContent = "Please fill in all required fields.";
    return;
  }

  const phoneRegex = /^[0-9]{10,12}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#ffebee";
    feedback.style.color = "#c62828";
    feedback.textContent = "Please enter a valid phone number.";
    return;
  }

  btn.disabled = true;
  btn.innerHTML = 'Submitting...';

  try {
    if (window.db) {
      await addDoc(collection(window.db, "enquiries"), {
        name,
        phone,
        service,
        message: message || "No message",
        timestamp: new Date()
      });

      feedback.style.display = "block";
      feedback.style.backgroundColor = "#e8f5e9";
      feedback.style.color = "#2e7d32";
      feedback.textContent = "Thank you! Your enquiry has been received successfully.";
      form.reset();
    } else {
      throw new Error("Database not initialized");
    }
  } catch (err) {
    console.error("Error adding document: ", err);
    feedback.style.display = "block";
    feedback.style.backgroundColor = "#ffebee";
    feedback.style.color = "#c62828";
    feedback.textContent = "There was an error submitting your form. Please try again or contact us directly.";
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Submit Enquiry <span>→</span>';
  }
});

const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("in-view")}),{threshold:.12});
document.querySelectorAll(".section,.service-card,.product-card,.review-grid article").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .65s ease,transform .65s ease";observer.observe(el)});
const style=document.createElement("style");style.textContent=".in-view{opacity:1!important;transform:none!important}";document.head.appendChild(style);
