const menuBtn=document.querySelector(".menu-btn"),mobileMenu=document.querySelector(".mobile-menu");
menuBtn?.addEventListener("click",()=>{const open=mobileMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);mobileMenu.setAttribute("aria-hidden",!open)});
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>{mobileMenu.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")}));

const ba=document.querySelector(".ba-wrap"), after=document.querySelector(".after"), divider=document.querySelector(".ba-divider");
let dragging=false;
function setBA(x){if(!ba)return;const r=ba.getBoundingClientRect();let p=Math.max(8,Math.min(92,((x-r.left)/r.width)*100));after.style.clipPath=`inset(0 0 0 ${p}%)`;divider.style.left=p+"%"}
ba?.addEventListener("pointerdown",e=>{dragging=true;ba.setPointerCapture(e.pointerId);setBA(e.clientX)});
ba?.addEventListener("pointermove",e=>{if(dragging)setBA(e.clientX)});
ba?.addEventListener("pointerup",()=>dragging=false);

document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));btn.classList.add("active");const f=btn.dataset.filter;document.querySelectorAll(".gallery-card").forEach(card=>card.classList.toggle("hide",f!=="all"&&card.dataset.cat!==f))}));

const lightbox=document.querySelector(".lightbox"), lightVisual=document.querySelector(".lightbox-visual"), lightTitle=document.querySelector(".lightbox h3");
document.querySelectorAll(".gallery-card").forEach(card=>card.addEventListener("click",()=>{lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");lightTitle.textContent=card.dataset.title;lightVisual.className="lightbox-visual "+card.querySelector(".visual").className.replace("visual ","visual-")}));
document.querySelector(".lightbox-close")?.addEventListener("click",()=>{lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true")});
lightbox?.addEventListener("click",e=>{if(e.target===lightbox)lightbox.classList.remove("open")});

document.querySelectorAll("[data-service]").forEach(link=>link.addEventListener("click",()=>{const select=document.querySelector('select[name="service"]');if(select)select.value=link.dataset.service}));

document.querySelector("#enquiry-form")?.addEventListener("submit",e=>{
  e.preventDefault();
  const f=new FormData(e.currentTarget);
  const name=f.get("name"),phone=f.get("phone"),service=f.get("service"),message=f.get("message");
  const text=`Hello High Look Steel Furniture,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message||"No message")}`;
  window.open(`https://wa.me/919845271535?text=${text}`,"_blank");
});

const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("in-view")}),{threshold:.12});
document.querySelectorAll(".section,.service-card,.product-card,.review-grid article").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .65s ease,transform .65s ease";observer.observe(el)});
const style=document.createElement("style");style.textContent=".in-view{opacity:1!important;transform:none!important}";document.head.appendChild(style);
