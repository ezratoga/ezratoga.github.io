<template>
    <section id="home" class="hero">
        <div class="hero-background">
            <div class="hero-particles"></div>
        </div>
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title animate-fade-in-scale">
                        {{ profile.name }}
                    </h1>
                    <p class="hero-subtitle animate-fade-in">
                        {{ profile.title }}
                    </p>
                    <p class="hero-description animate-fade-in">
                        {{ profile.description }}
                    </p>
                    <div class="hero-actions animate-fade-in">
                        <button class="btn btn-primary btn-lg" @click="scrollTo('contact')">
                            <i class="fas fa-envelope"></i>
                            Get In Touch
                        </button>
                        <button class="btn btn-outline btn-lg" @click="scrollTo('experience')">
                            <i class="fas fa-user"></i>
                            View Experience
                        </button>
                    </div>
                </div>
                <div class="hero-visual">
                    <div class="profile-card animate-fade-in-scale">
                        <div class="profile-avatar">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="profile-info">
                            <h3>Backend Developer</h3>
                            <p>5+ Years Experience</p>
                        </div>
                        <div class="profile-skills">
                            <span class="skill-badge">Node.js</span>
                            <span class="skill-badge">Go</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const profile = ref({
    name: 'Ezra Toga',
    title: 'Software Engineer | Focused on Backend Engineer | Passionate at Cybersecurity, Data Engineering',
    description: 'Passionate about developing scalable solutions, cybersecurity, and data engineering. Experienced in building RESTful APIs, optimizing backend processes and developing UI.'
})

const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped>
/* ========================================
   MODERN HERO SECTION
   ======================================== */

.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%);
    overflow: hidden;
    padding-top: 80px;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.hero-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.06) 0%, transparent 50%);
    animation: float 20s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
    }
    50% { 
        transform: translateY(-20px) rotate(180deg); 
    }
}

.hero-content {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    align-items: center;
    min-height: calc(100vh - 80px);
}

.hero-text {
    color: white;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: var(--space-4);
    background: linear-gradient(45deg, #ffffff, #f0f4ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--space-6);
    line-height: 1.4;
}

.hero-description {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: var(--space-8);
    line-height: 1.6;
    max-width: 500px;
}

.hero-actions {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
}

.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: var(--radius-2xl);
    padding: var(--space-8);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: var(--shadow-2xl);
    transition: all var(--transition-normal);
    max-width: 350px;
    width: 100%;
}

.profile-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.profile-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    margin: 0 auto var(--space-4);
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: var(--shadow-lg);
}

.profile-info h3 {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--space-2);
}

.profile-info p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    margin-bottom: var(--space-6);
}

.profile-skills {
    display: flex;
    justify-content: center;
    gap: var(--space-3);
    flex-wrap: wrap;
}

.skill-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all var(--transition-normal);
}

.skill-badge:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content {
        gap: var(--space-12);
    }
    
    .profile-card {
        padding: var(--space-6);
    }
    
    .profile-avatar {
        width: 100px;
        height: 100px;
        font-size: 2.5rem;
    }
}

@media (max-width: 768px) {
    .hero {
        padding-top: 70px;
    }
    
    .hero-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
        text-align: center;
        min-height: calc(100vh - 70px);
    }
    
    .hero-actions {
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    
    .hero-actions .btn {
        width: 100%;
        max-width: 300px;
    }
    
    .profile-card {
        max-width: 300px;
        padding: var(--space-6);
    }
    
    .profile-avatar {
        width: 90px;
        height: 90px;
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .hero {
        padding-top: 60px;
    }
    
    .hero-content {
        min-height: calc(100vh - 60px);
        gap: var(--space-6);
    }
    
    .profile-card {
        padding: var(--space-4);
        max-width: 280px;
    }
    
    .profile-avatar {
        width: 80px;
        height: 80px;
        font-size: 1.75rem;
    }
    
    .skill-badge {
        font-size: 0.8rem;
        padding: var(--space-1) var(--space-3);
    }
}

/* Animation delays for staggered effect */
.hero-title { animation-delay: 0.1s; }
.hero-subtitle { animation-delay: 0.2s; }
.hero-description { animation-delay: 0.3s; }
.hero-actions { animation-delay: 0.4s; }
.profile-card { animation-delay: 0.5s; }
</style>