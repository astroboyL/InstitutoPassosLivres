/* =============================================
   INSTITUTO PASSOS LIVRES — PREMIUM JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR MOBILE MENU ── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ── SMOOTH SCROLL (Active states) ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    rootMargin: '-20% 0px -70% 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => sectionObserver.observe(sec));

  /* ── SCROLL REVEAL ANIMATIONS ── */
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ── COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('.stat-number, .metric-number');
  
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        let current = 0;
        const increment = target / 40; // 40 steps
        
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            entry.target.innerText = Math.ceil(current) + "+";
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.innerText = target + "+";
          }
        };
        
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  /* ── FORM HANDLING ── */
  const form = document.getElementById('doe-form');
  const submitBtn = document.getElementById('form-submit-btn');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const originalText = submitBtn.innerText;
      submitBtn.innerText = "Enviando...";
      submitBtn.style.opacity = "0.7";
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerText = "Mensagem Enviada ✓";
        submitBtn.style.opacity = "1";
        submitBtn.style.backgroundColor = "#3d8b37"; // Success color
        form.reset();
        
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.style.backgroundColor = "";
        }, 4000);
      }, 1500);
    });
  }

  /* ── CINEMATIC SLIDER ── */
  const slides = document.querySelectorAll('.slide-img');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      // Remove active from all
      slides.forEach(s => s.classList.remove('active'));
      // Next slide
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
      // Forzar reflow para reiniciar animação CSS no Chrome
      void slides[currentSlide].offsetWidth;
    }, 7000); // 7s interval allows 1s overlap with 8s animation
  }

});
