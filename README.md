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
