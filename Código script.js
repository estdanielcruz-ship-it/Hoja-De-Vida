// Selección de elementos
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('.icon');
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

// 1. Lógica del Modo Oscuro
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    if (body.hasAttribute('data-theme')) {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.textContent = '☀️';
    }
});

// 2. Lógica del Formulario de Contacto
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Detener el envío real
    
    // Animación simple: ocultar formulario y mostrar mensaje
    contactForm.style.display = 'none';
    formResponse.classList.remove('hidden');
    
    console.log("Formulario enviado por Daniel Mateo");
});
