// ─── HEADER SCROLL ───
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ─── BURGER MENU ───
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// ─── INTERSECTION OBSERVER (анимации появления) ───
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(section);
});

// ─── ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Закрываем бургер-меню, если оно открыто
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    }
  });
});
