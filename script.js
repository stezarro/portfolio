// Плавный скролл при клике на ссылки в навигации
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Кнопка "Отправить" — простая заглушка
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо! Я свяжусь с вами в ближайшее время.');
    this.reset();
});
