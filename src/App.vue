
<script setup>
import AboutSection from './components/AboutSection.vue';
import AppNavigation from './components/AppNavigation.vue';
import ContactSection from './components/ContactSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import FooterSection from './components/FooterSection.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
</script>

<template>
  <AppNavigation />
  <HeroSection />
  <AboutSection />
  <SkillsSection />
  <ExperienceSection />
  <ContactSection />
  <FooterSection />
</template>

<style>
/* ========================================
   MODERN DESIGN SYSTEM & GLOBAL STYLES
   ======================================== */

/* CSS Custom Properties (Design Tokens) */
:root {
  /* Colors */
  --primary-50: #f0f4ff;
  --primary-100: #e0e7ff;
  --primary-200: #c7d2fe;
  --primary-300: #a5b4fc;
  --primary-400: #818cf8;
  --primary-500: #6366f1;
  --primary-600: #4f46e5;
  --primary-700: #4338ca;
  --primary-800: #3730a3;
  --primary-900: #312e81;

  --secondary-50: #fdf4ff;
  --secondary-100: #fae8ff;
  --secondary-200: #f5d0fe;
  --secondary-300: #f0abfc;
  --secondary-400: #e879f9;
  --secondary-500: #d946ef;
  --secondary-600: #c026d3;
  --secondary-700: #a21caf;
  --secondary-800: #86198f;
  --secondary-900: #701a75;

  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  --success-500: #10b981;
  --warning-500: #f59e0b;
  --error-500: #ef4444;

  /* Typography */
  --font-family-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 300ms ease-in-out;
  --transition-slow: 500ms ease-in-out;

  /* Z-Index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* Global Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Base Styles */
html {
  scroll-behavior: smooth;
  font-size: 16px;
  line-height: 1.5;
}

body {
  font-family: var(--font-family-sans);
  font-weight: 400;
  line-height: 1.6;
  color: var(--gray-800);
  background-color: #ffffff;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

#app {
  font-family: var(--font-family-sans);
  color: var(--gray-800);
  min-height: 100vh;
}

/* Typography Scale */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--gray-900);
  margin-bottom: var(--space-4);
}

h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
h4 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }
h5 { font-size: clamp(1.125rem, 2vw, 1.25rem); }
h6 { font-size: clamp(1rem, 1.5vw, 1.125rem); }

p {
  margin-bottom: var(--space-4);
  color: var(--gray-600);
}

/* Container System */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.container-sm { max-width: 640px; }
.container-md { max-width: 768px; }
.container-lg { max-width: 1024px; }
.container-xl { max-width: 1280px; }

/* Section Styles */
.section {
  padding: var(--space-20) 0;
  position: relative;
}

.section-sm { padding: var(--space-16) 0; }
.section-lg { padding: var(--space-24) 0; }

.section-white { background-color: #ffffff; }
.section-gray { background-color: var(--gray-50); }
.section-primary { 
  background: linear-gradient(135deg, var(--primary-600) 0%, var(--secondary-600) 100%);
  color: white;
}

/* Section Titles */
.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: var(--space-12);
  color: var(--gray-900);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: calc(-1 * var(--space-4));
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
  border-radius: var(--radius-full);
}

/* Button System */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.btn-primary {
  background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-outline {
  background: transparent;
  color: var(--primary-600);
  border-color: var(--primary-600);
}

.btn-outline:hover {
  background: var(--primary-600);
  color: white;
  transform: translateY(-2px);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: 1.125rem;
}

.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: 0.875rem;
}

/* Card System */
.card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-body {
  padding: var(--space-6);
}

.card-header {
  padding: var(--space-6) var(--space-6) 0;
}

.card-footer {
  padding: 0 var(--space-6) var(--space-6);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

/* Animation Classes */
.animate-fade-in {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-scale {
  animation: fadeInScale 0.6s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-bounce {
  animation: bounce 1s ease-in-out;
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }

.text-primary { color: var(--primary-600); }
.text-secondary { color: var(--secondary-600); }
.text-gray { color: var(--gray-600); }
.text-gray-dark { color: var(--gray-800); }

.bg-primary { background-color: var(--primary-600); }
.bg-secondary { background-color: var(--secondary-600); }
.bg-gray { background-color: var(--gray-100); }

.rounded { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-full { border-radius: var(--radius-full); }

.shadow { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }

/* Spacing Utilities */
.m-0 { margin: 0; }
.m-1 { margin: var(--space-1); }
.m-2 { margin: var(--space-2); }
.m-3 { margin: var(--space-3); }
.m-4 { margin: var(--space-4); }
.m-6 { margin: var(--space-6); }
.m-8 { margin: var(--space-8); }

.mt-0 { margin-top: 0; }
.mt-1 { margin-top: var(--space-1); }
.mt-2 { margin-top: var(--space-2); }
.mt-3 { margin-top: var(--space-3); }
.mt-4 { margin-top: var(--space-4); }
.mt-6 { margin-top: var(--space-6); }
.mt-8 { margin-top: var(--space-8); }

.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: var(--space-1); }
.mb-2 { margin-bottom: var(--space-2); }
.mb-3 { margin-bottom: var(--space-3); }
.mb-4 { margin-bottom: var(--space-4); }
.mb-6 { margin-bottom: var(--space-6); }
.mb-8 { margin-bottom: var(--space-8); }

.p-0 { padding: 0; }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
.p-3 { padding: var(--space-3); }
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    padding: 0 var(--space-4);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 var(--space-3);
  }
  
  .section {
    padding: var(--space-16) 0;
  }
  
  .section-title {
    margin-bottom: var(--space-8);
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--space-2);
  }
  
  .section {
    padding: var(--space-12) 0;
  }
  
  .section-title {
    margin-bottom: var(--space-6);
  }
}

/* Focus Management */
.focus-visible {
  outline: 2px solid var(--primary-500);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
