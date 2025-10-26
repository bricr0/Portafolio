// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Filtrado de portafolio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animación de barras de habilidades al hacer scroll
const skillBars = document.querySelectorAll('.skill-per');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const per = bar.getAttribute('per');
        if (isElementInViewport(bar)) {
            bar.style.width = per;
        }
    });
}

// Verificar si un elemento está en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animación de aparición al hacer scroll
const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-img, .about-text');

function checkVisibility() {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Inicializar animaciones al cargar la página
window.addEventListener('load', () => {
    animateSkillBars();
    checkVisibility();
});

// Ejecutar animaciones al hacer scroll
window.addEventListener('scroll', () => {
    animateSkillBars();
    checkVisibility();
});

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ejemplo, usando Fetch API o enviando a un servicio de email
        
        // Simulación de envío exitoso
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado con éxito! Te contactaré pronto.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Cambiar estilo del header al hacer scroll
// window.addEventListener('scroll', () => {
//    const header = document.querySelector('header');
//    if (window.scrollY > 100) {
//        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
//        header.style.background = 'rgba(0, 0, 0, 0.95)';
//    } else {
//        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//        header.style.background = 'white';
//    }

//});

// Efecto de escritura en el hero (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    
    typing();
}

// Inicializar efecto de escritura si se desea
 const heroTitle = document.querySelector('.hero h1');
 if (heroTitle) {
     const originalText = heroTitle.textContent;
     typeWriter(heroTitle, originalText, 100);
 }

 // Animar barras de habilidades al hacer scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-per');
    
    skillBars.forEach(bar => {
        const per = bar.getAttribute('data-per');
        if (isElementInViewport(bar)) {
            bar.style.width = per;
        }
    });
}

// Ejecutar al cargar y hacer scroll
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);