<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="nav-content">
      <div class="logo">
        Ezra Toga
      </div>
      <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <li><a href="#home" class="nav-link" @click.prevent="scrollTo('home')">Home</a></li>
        <li><a href="#about" class="nav-link" @click.prevent="scrollTo('about')">About</a></li>
        <li><a href="#skills" class="nav-link" @click.prevent="scrollTo('skills')">Skills</a></li>
        <li><a href="#experience" class="nav-link" @click.prevent="scrollTo('experience')">Experience</a></li>
        <li><a href="#contact" class="nav-link" @click.prevent="scrollTo('contact')">Contact</a></li>
      </ul>
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <i class="fas" :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const scrollTo = (elementId) => {
  document.getElementById(elementId).scrollIntoView({
    behavior: 'smooth'
  })
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ========================================
   MODERN NAVIGATION COMPONENT
   ======================================== */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-fixed);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--gray-200);
    transition: all var(--transition-normal);
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: var(--shadow-lg);
    border-bottom-color: var(--gray-300);
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-4) var(--space-6);
    max-width: 1200px;
    margin: 0 auto;
    height: 80px;
}

.logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-600);
    text-decoration: none;
    transition: all var(--transition-normal);
}

.logo:hover {
    color: var(--primary-700);
    transform: scale(1.05);
}

.logo i {
    font-size: 1.25rem;
    color: var(--secondary-600);
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: var(--space-8);
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu li {
    position: relative;
}

.nav-link {
    position: relative;
    display: block;
    padding: var(--space-2) var(--space-3);
    color: var(--gray-700);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    cursor: pointer;
}

.nav-link:hover {
    color: var(--primary-600);
    background: var(--primary-50);
    transform: translateY(-1px);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
    border-radius: var(--radius-full);
    transition: width var(--transition-normal);
}

.nav-link:hover::after {
    width: 100%;
}

.mobile-menu-btn {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: none;
    border: none;
    border-radius: var(--radius-md);
    color: var(--gray-700);
    font-size: 1.25rem;
    cursor: pointer;
    transition: all var(--transition-normal);
}

.mobile-menu-btn:hover {
    background: var(--primary-50);
    color: var(--primary-600);
}

.mobile-menu-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .nav-content {
        height: 70px;
        padding: var(--space-3) var(--space-4);
    }
    
    .logo {
        font-size: 1.25rem;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        border-top: 1px solid var(--gray-200);
        box-shadow: var(--shadow-xl);
        flex-direction: column;
        gap: 0;
        padding: var(--space-6);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-normal);
        z-index: var(--z-dropdown);
    }
    
    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .nav-menu li {
        width: 100%;
        margin: var(--space-1) 0;
    }
    
    .nav-link {
        display: block;
        width: 100%;
        padding: var(--space-4);
        text-align: center;
        border-radius: var(--radius-lg);
        font-size: 1rem;
        font-weight: 600;
    }
    
    .nav-link:hover {
        background: var(--primary-100);
        transform: none;
    }
    
    .nav-link::after {
        display: none;
    }
}

@media (max-width: 480px) {
    .nav-content {
        height: 60px;
        padding: var(--space-2) var(--space-3);
    }
    
    .logo {
        font-size: 1.125rem;
    }
    
    .nav-menu {
        top: 60px;
        padding: var(--space-4);
    }
    
    .mobile-menu-btn {
        width: 40px;
        height: 40px;
        font-size: 1.125rem;
    }
}

/* Animation for mobile menu icon */
.mobile-menu-btn i {
    transition: transform var(--transition-normal);
}

.nav-menu.active + .mobile-menu-btn i {
    transform: rotate(45deg);
}

/* Focus states for accessibility */
.nav-link:focus-visible {
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
}

/* Smooth scrolling offset for fixed header */
html {
    scroll-padding-top: 80px;
}

@media (max-width: 768px) {
    html {
        scroll-padding-top: 70px;
    }
}

@media (max-width: 480px) {
    html {
        scroll-padding-top: 60px;
    }
}
</style>
