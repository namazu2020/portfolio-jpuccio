document.addEventListener("DOMContentLoaded", () => {
  // Lucide icons
  lucide.createIcons();

  // Typing Effect
  const typingTarget = document.getElementById("typing-text");
  const typingText = "Administración & Desarrollo Tecnológico";
  let i = 0;

  function typeEffect() {
    if (i < typingText.length) {
      typingTarget.textContent += typingText.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }

  if (typingTarget) typeEffect();

  // Animaciones al hacer scroll con IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".fade-in, .fade-left, .fade-right")
    .forEach((el) => {
      observer.observe(el);
    });

  // ScrollSpy: resalta sección activa en navbar
  const sections = document.querySelectorAll("section, footer");

  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - 150 && pageYOffset < sectionTop + sectionHeight - 150) {
        current = section.getAttribute("id");
      }
    });
    
    // Caso especial: si estamos al final del scroll, marcar contacto
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      current = "contacto";
    }
    

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);

  // Swiper (Educación)
  new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Forzar scroll al top al recargar
  window.onbeforeunload = () => window.scrollTo(0, 0);
});
