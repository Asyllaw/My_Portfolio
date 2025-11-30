  document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- Theme Toggle (fade-swap using inline SVG) ---------------- */
  const themeToggleBtn = document.getElementById('themeToggle');
  // initialize from stored preference if any
  const saved = localStorage.getItem('site-theme');
  if (saved === 'dark') document.body.classList.add('dark');

  themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const nowDark = document.body.classList.contains('dark');
  localStorage.setItem('site-theme', nowDark ? 'dark' : 'light');
  });

  /* ---------------- Reveal on scroll ---------------- */
  function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const windowH = window.innerHeight;
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < windowH - 100) el.classList.add('active');
  }
  }
  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  /* ---------------- Navbar scroll shadow + active link ---------------- */
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('nav a.nav-link, nav a');
  const sections = document.querySelectorAll('main section[id]');


  function onScrollNav() {
  // header shadow
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');

  // active link
  let current = sections[0]?.id || '';
  for (const sec of sections) {
    const top = sec.offsetTop - 120; // adjust for header height
    if (pageYOffset >= top) current = sec.id;
  }
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------------- Footer year ---------------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  // Get the modal
  const modal = document.getElementById("contactModal");

  // Get the button that opens the modal
  const openModalBtn = document.getElementById("openModalBtn");

  // Get the <span> element that closes the modal
  const closeButton = document.getElementsByClassName("close-button")[0];

  // When the user clicks the button, open the modal
  openModalBtn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: ["#06b6d4", "#9333ea"] },
      shape: { type: "circle" },
      opacity: { value: 0.3, random: true },
      size: { value: 4, random: true },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#999999",
        opacity: 1,
        width: 1
      },
      move: { enable: true, speed: 5 }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 350, line_linked: { opacity: 1 } } }
    },
    retina_detect: true
  });
  });
