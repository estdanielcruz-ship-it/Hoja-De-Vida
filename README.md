<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV | Daniel Mateo Cruz Orjuela</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container header-content">
            <h1>Daniel Mateo Cruz Orjuela</h1>
            <p class="subtitle">Estudiante en I.E.D. Jorge Gaitán Cortés | 16 años</p>
            <p><strong>Teléfono:</strong> 320 327 2070</p>
            <button id="theme-toggle" title="Cambiar modo de color">
                <span class="icon">🌙</span> Modo Oscuro
            </button>
        </div>
    </header>

    <main class="container">
        <section id="perfil">
            <h2>Perfil Personal</h2>
            <p>Soy un estudiante comprometido con mi formación académica. Me destaco por mis habilidades en <strong>inglés</strong> y mi disciplina, la cual fortalezco a través de mi pasión por el <strong>básquetbol</strong>.</p>
        </section>

        <section id="educacion">
            <h2>Trayectoria Académica</h2>
            <article class="card">
                <h3>Educación Actual</h3>
                <p><strong>I.E.D. Jorge Gaitán Cortés</strong></p>
            </article>

            <article class="card">
                <h3>Historial Escolar</h3>
                <ul class="history-list">
                    <li><strong>Noveno:</strong> Colegio Diego Fallón</li>
                    <li><strong>Sexto a Octavo:</strong> Colegio Jiménez de Quesada</li>
                    <li><strong>Cuarto y Quinto:</strong> Colegio Garavito</li>
                    <li><strong>Primero a Tercero:</strong> Instituto Técnico Angeli</li>
                </ul>
            </article>
        </section>

        <section id="habilidades">
            <h2>Habilidades</h2>
            <div class="skills-grid">
                <span class="skill-tag">Inglés Fluido</span>
                <span class="skill-tag">Básquetbol</span>
                <span class="skill-tag">Liderazgo</span>
                <span class="skill-tag">Trabajo en Equipo</span>
            </div>
        </section>

        <section id="referencias">
            <h2>Referencias</h2>
            <div class="grid-cards">
                <article class="card">
                    <h3>Heyder Stib Cruz Zapata</h3>
                    <p>Veterinario (31 años)</p>
                </article>
                <article class="card">
                    <h3>Zandra Milena Zapata</h3>
                    <p>Cosedora y Fotógrafa</p>
                </article>
            </div>
        </section>

        <section id="contacto">
            <h2>Contacto</h2>
            <div class="card">
                <form id="contact-form">
                    <div class="form-group">
                        <input type="text" id="nombre" placeholder="Tu Nombre" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" placeholder="Tu Correo" required>
                    </div>
                    <textarea id="mensaje" rows="4" placeholder="Escribe tu mensaje..." required></textarea>
                    <button type="submit" class="btn-primary">Enviar Mensaje</button>
                </form>
                <div id="form-response" class="hidden">
                    ✅ ¡Gracias por contactarme, Daniel te responderá pronto!
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 - Daniel Mateo Cruz Orjuela | Bogotá, Colombia</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>




:root {
    --bg-color: #f8fafc;
    --text-color: #1e293b;
    --primary-color: #2563eb;
    --card-bg: #ffffff;
    --header-bg: #0f172a;
    --header-text: #ffffff;
    --transition: all 0.3s ease;
}

[data-theme="dark"] {
    --bg-color: #0f172a;
    --text-color: #f1f5f9;
    --primary-color: #60a5fa;
    --card-bg: #1e293b;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', system-ui, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: var(--transition);
}

.container { max-width: 850px; margin: 0 auto; padding: 2rem; }

header {
    background-color: var(--header-bg);
    color: var(--header-text);
    padding: 3rem 1rem;
    text-align: center;
    border-bottom: 5px solid var(--primary-color);
}

#theme-toggle {
    cursor: pointer;
    background: var(--primary-color);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    color: white;
    margin-top: 15px;
    font-weight: bold;
    transition: var(--transition);
}

section { margin-top: 3rem; }

h2 {
    color: var(--primary-color);
    margin-bottom: 1.2rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 5px;
}

.card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    margin-bottom: 1rem;
    transition: var(--transition);
}

/* Grids responsivos */
.grid-cards {
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 columnas en PC */
    gap: 1.5rem;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-tag {
    background: var(--primary-color);
    color: white;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
}

/* Formulario */
.form-group { margin-bottom: 1rem; }
input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    background: var(--card-bg);
    color: var(--text-color);
    font-family: inherit;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
}

#form-response {
    background: #22c55e;
    color: white;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.hidden { display: none; }

footer { text-align: center; padding: 4rem 1rem; opacity: 0.7; }

/* MEDIA QUERIES (OPTIMIZACIÓN MÓVIL) */
@media (max-width: 600px) {
    .container { padding: 1rem; }
    .grid-cards { grid-template-columns: 1fr; } /* Apila las tarjetas en una columna */
    header { padding: 2rem 1rem; }
    h1 { font-size: 1.6rem; }
}




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
