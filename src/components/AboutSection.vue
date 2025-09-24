<template>
    <section id="about" class="section section-white">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>{{ profile.about }}</p>
                </div>
                <div class="about-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-graduation-cap"></i>
                        <h3>Education</h3>
                        <p>Bachelor's in Electrical Engineering</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-briefcase"></i>
                        <h3>Experience</h3>
                        <p>5+ Years in Backend Development</p>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-shield-alt"></i>
                        <h3>Specialization</h3>
                        <p>Cybersecurity & Data Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
    about: 'Bachelor Degree of Electrical Engineering with more than 5 years as Backend Engineer, Full Stack Engineer. I\'m passionate about developing creative solutions, communication, Cybersecurity, Data Engineering, understanding both business flow and technical flow. Skilled in building and maintaining scalable RESTful APIs using Node.js (JavaScript/TypeScript), PHP, Go and managing databases like MongoDB, MySQL, and PostgreSQL. Experienced in data migration, PDF generation and optimizing backend processes with Redis and Kafka. And a bit experience in developing and maintaining UI Side using React.js or Vue.js'
})

</script>

<style scoped>
/* ========================================
   MODERN ABOUT SECTION
   ======================================== */

.about-content {
    max-width: 1000px;
    margin: 0 auto;
}

.about-text {
    text-align: center;
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.8;
    color: var(--gray-600);
    margin-bottom: var(--space-12);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.about-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-8);
}

.highlight-item {
    background: white;
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    text-align: center;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-200);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.highlight-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
    transform: scaleX(0);
    transition: transform var(--transition-normal);
}

.highlight-item:hover::before {
    transform: scaleX(1);
}

.highlight-item:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-200);
}

.highlight-item i {
    font-size: 3rem;
    color: var(--primary-600);
    margin-bottom: var(--space-4);
    display: block;
    transition: all var(--transition-normal);
}

.highlight-item:hover i {
    transform: scale(1.1);
    color: var(--secondary-600);
}

.highlight-item h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-3);
    transition: color var(--transition-normal);
}

.highlight-item:hover h3 {
    color: var(--primary-700);
}

.highlight-item p {
    color: var(--gray-600);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .about-highlights {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-4);
    }
    
    .highlight-item {
        padding: var(--space-6);
    }
}

@media (max-width: 768px) {
    .about-text {
        font-size: 1rem;
        margin-bottom: var(--space-8);
    }
    
    .about-highlights {
        grid-template-columns: 1fr;
        gap: var(--space-4);
        margin-top: var(--space-6);
    }
    
    .highlight-item {
        padding: var(--space-6);
    }
    
    .highlight-item i {
        font-size: 2.5rem;
    }
    
    .highlight-item h3 {
        font-size: 1.25rem;
    }
}

@media (max-width: 480px) {
    .about-text {
        margin-bottom: var(--space-6);
    }
    
    .highlight-item {
        padding: var(--space-4);
    }
    
    .highlight-item i {
        font-size: 2rem;
        margin-bottom: var(--space-3);
    }
    
    .highlight-item h3 {
        font-size: 1.125rem;
        margin-bottom: var(--space-2);
    }
    
    .highlight-item p {
        font-size: 0.9rem;
    }
}

/* Animation delays for staggered effect */
.highlight-item:nth-child(1) { animation-delay: 0.1s; }
.highlight-item:nth-child(2) { animation-delay: 0.2s; }
.highlight-item:nth-child(3) { animation-delay: 0.3s; }
</style>