<template>
    <footer class="footer">
        <div class="container">
            <div class="social-links">
                <a href="https://github.com/ezratoga" class="social-link"><i class="fab fa-github"></i></a>
                <a href="https://linkedin.com/in/ezratoga" class="social-link"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:ezraparulian@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
            </div>
            <p>&copy; 2025 Ezra Toga Parulian Hutabarat. All rights reserved.</p>
        </div>
    </footer>    
</template>

<style scoped>
/* ========================================
   MODERN FOOTER SECTION
   ======================================== */

.footer {
    background: linear-gradient(135deg, var(--gray-900) 0%, var(--gray-800) 100%);
    color: white;
    text-align: center;
    padding: var(--space-16) 0;
    position: relative;
    overflow: hidden;
}

.footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--primary-500), var(--secondary-500), transparent);
}

.footer::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 70, 239, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: var(--space-6);
    margin-bottom: var(--space-8);
    position: relative;
    z-index: 2;
}

.social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-radius: var(--radius-full);
    text-decoration: none;
    transition: all var(--transition-normal);
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.social-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
    opacity: 0;
    transition: opacity var(--transition-normal);
    border-radius: var(--radius-full);
}

.social-link:hover::before {
    opacity: 1;
}

.social-link:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: var(--shadow-2xl);
    border-color: transparent;
    color: white;
}

.social-link i {
    position: relative;
    z-index: 2;
    font-size: 1.25rem;
    transition: transform var(--transition-normal);
}

.social-link:hover i {
    transform: scale(1.2);
}

.footer p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
    position: relative;
    z-index: 2;
    font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .footer {
        padding: var(--space-12) 0;
    }
    
    .social-links {
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }
}

@media (max-width: 768px) {
    .footer {
        padding: var(--space-10) 0;
    }
    
    .social-links {
        gap: var(--space-4);
        margin-bottom: var(--space-6);
    }
    
    .social-link {
        width: 48px;
        height: 48px;
    }
    
    .social-link i {
        font-size: 1.125rem;
    }
}

@media (max-width: 480px) {
    .footer {
        padding: var(--space-8) 0;
    }
    
    .social-links {
        gap: var(--space-3);
        margin-bottom: var(--space-4);
    }
    
    .social-link {
        width: 44px;
        height: 44px;
    }
    
    .social-link i {
        font-size: 1rem;
    }
    
    .footer p {
        font-size: 0.85rem;
    }
}

/* Animation delays for staggered effect */
.social-link:nth-child(1) { animation-delay: 0.1s; }
.social-link:nth-child(2) { animation-delay: 0.2s; }
.social-link:nth-child(3) { animation-delay: 0.3s; }
</style>