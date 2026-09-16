/* =========================================================
   ProAC Repair — site.js
   Language switcher: default = English-first bilingual view.
   Clicking "العربية" fully switches the site to Arabic/RTL.
   ========================================================= */

/* =========================================================
   ProAC Repair — site.js
   Single bilingual view: English + Arabic always shown together,
   no language switcher/toggle needed.
   ========================================================= */

document.addEventListener('DOMContentLoaded', function(){

  // Navbar shadow on scroll
  const nav = document.querySelector('.navbar');
  if(nav){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 40){ nav.classList.add('shadow-sm'); }
      else{ nav.classList.remove('shadow-sm'); }
    });
  }

  // Scroll-reveal animation
  const reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && reveals.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold:.15 });
    reveals.forEach(el => io.observe(el));
  }

  // Animated counters
  const counters = document.querySelectorAll('[data-counter]');
  if(counters.length){
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const el = entry.target;
          const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          const target = parseFloat(el.getAttribute('data-counter'));
          const duration = 60; // frames
          let frame = 0;
          const tick = () => {
            frame++;
            const progress = Math.min(frame / duration, 1);
            const cur = target * progress;
            el.textContent = decimals > 0
              ? cur.toFixed(decimals)
              : Math.round(cur).toLocaleString();
            if(progress < 1){ requestAnimationFrame(tick); }
            else {
              el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
            }
          };
          tick();
          countIo.unobserve(el);
        }
      });
    }, { threshold:.4 });
    counters.forEach(c => countIo.observe(c));
  }

  // Generic service/contact form handler (client-side only demo)
  const forms = document.querySelectorAll('.proac-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const box = form.querySelector('.form-response');
      const msgEn = 'Thank you! Your request has been received. Our team will contact you within 1–2 hours.';
      const msgAr = 'شكراً لك! تم استلام طلبك بنجاح. سيتواصل معك فريقنا خلال ساعة إلى ساعتين.';
      if(box){
        box.innerHTML = '<div>' + msgEn + '</div><div style="font-family:var(--font-ar);direction:rtl;margin-top:.4rem;font-size:.92em;opacity:.85;">' + msgAr + '</div>';
        box.classList.add('show');
        setTimeout(() => box.classList.remove('show'), 8000);
      } else {
        alert(msgEn + '\\n' + msgAr);
      }
      form.reset();
    });
  });
});

/* ---------- Gallery lightbox (used on gallery.html) ---------- */
function openImageModal(src, caption){
  let modal = document.getElementById('proacLightbox');
  if(!modal){
    modal = document.createElement('div');
    modal.id = 'proacLightbox';
    modal.style.cssText = 'position:fixed;inset:0;background:rgba(6,20,24,.92);z-index:2000;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:2rem;';
    modal.innerHTML = '<span id="proacLightboxClose" style="position:absolute;top:20px;right:30px;color:#fff;font-size:2rem;cursor:pointer;">&times;</span><img id="proacLightboxImg" style="max-width:90%;max-height:80vh;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5);"><p id="proacLightboxCap" style="color:#fff;margin-top:1rem;font-weight:600;"></p>';
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => { if(e.target === modal) modal.remove(); });
    document.getElementById('proacLightboxClose').addEventListener('click', () => modal.remove());
  }
  document.getElementById('proacLightboxImg').src = src;
  document.getElementById('proacLightboxCap').textContent = caption || '';
}
