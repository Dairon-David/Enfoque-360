document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
    
    // Cargar más noticias (simulación)
    const loadMoreBtn = document.querySelector('.load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simular carga de más noticias
            this.textContent = 'Cargando...';
            
            setTimeout(() => {
                // En una implementación real, aquí harías una petición AJAX
                const newsGrid = document.querySelector('.news-grid');
                const newItem = document.createElement('article');
                newItem.className = 'news-card';
                newItem.innerHTML = `
                    <div class="card-image">
                        <img src="https://via.placeholder.com/300x200" alt="Nueva noticia">
                        <span class="category-label tecnologia">Tecnología</span>
                    </div>
                    <div class="card-content">
                        <h3><a href="#">Nueva noticia cargada dinámicamente</a></h3>
                        <p class="article-meta">Por <span class="author">Autor Nuevo</span> | <time datetime="2023-05-15">15 Mayo 2023</time></p>
                        <p class="article-excerpt">Esta es una nueva noticia cargada cuando el usuario hace clic en el botón.</p>
                        <a href="#" class="read-more">Leer más</a>
                    </div>
                `;
                newsGrid.appendChild(newItem);
                this.textContent = 'Cargar más noticias';
            }, 1000);
        });
    }
    
    // Formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Validación simple
            if (emailInput.value === '') {
                alert('Por favor ingresa tu correo electrónico');
                return;
            }
            
            // Simular envío
            this.querySelector('button').textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('¡Gracias por suscribirte a nuestro newsletter!');
                this.reset();
                this.querySelector('button').textContent = 'Suscribirse';
            }, 1500);
        });
    }
    
    // Efecto de scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Cambiar color de header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.backgroundColor = 'var(--primary-color)';
            header.style.boxShadow = 'var(--shadow)';
        }
    });
    
    // Actualizar noticia de último momento (simulación)
    function updateBreakingNews() {
        const breakingNews = [
            "Nuevo acuerdo internacional firmado hoy por el presidente",
            "El equipo local gana el campeonato después de 10 años",
            "Descubrimiento científico revolucionario anunciado esta mañana",
            "Mercados alcanzan récord histórico en la bolsa de valores"
        ];
        
        const breakingNewsContent = document.querySelector('.breaking-news-content p');
        if (breakingNewsContent) {
            let currentIndex = 0;
            
            setInterval(() => {
                currentIndex = (currentIndex + 1) % breakingNews.length;
                breakingNewsContent.textContent = breakingNews[currentIndex];
            }, 8000);
        }
    }
    
    updateBreakingNews();
});