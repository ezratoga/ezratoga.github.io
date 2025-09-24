<template>
    <section id="experience" class="section section-white">
        <div class="container">
            <h2 class="section-title">Experience & Expertise</h2>
            <div class="timeline">
                <div class="timeline-item" v-for="(exp, index) in experience" :key="index">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3 style="color: #667eea; margin-bottom: 0.5rem;">{{ exp.role }}</h3>
                        <p style="font-weight: 600; color: #4a5568; margin-bottom: 0.5rem;">{{ exp.duration }}</p>
                        <p style="color: #718096;">{{ exp.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script setup>
import { ref } from 'vue'

const experience = ref([
    {
        role: "Software Engineer at BPJS Ketenagakerjaan",
        duration: "2024 - Present",
        description: "Built RESTful APIs and web interfaces using PHP, Node.js, Golang, HTML, and JavaScript. Delivered a scalable microservice and maintained web application used by all BPJS Ketenagakerjaan employees across headquarters and branch office in Indonesia for budget disbursement"
    },
    {
        role: "Backend Developer at Telkom Indonesia",
        duration: "2021 - 2024",
        description: "I built and maintained high-performance backend systems for Internal Application that focused on reliability, distributed transactions, and data consistency. Developed and maintained APIs using Node.js, TypeScript for microservices, integrated data pipelines from Airflow into services via Kafka. A key challenge I solved involved fixing data discrepancies by collaborating with data engineers, refining event-driven architecture, and implementing strong data constraints."
    }
])
</script>

<style scoped>
/* ========================================
   MODERN EXPERIENCE TIMELINE
   ======================================== */

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-8) 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, var(--primary-500), var(--secondary-500));
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-md);
}

.timeline-item {
    position: relative;
    margin: var(--space-12) 0;
}

.timeline-content {
    background: white;
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-lg);
    position: relative;
    width: 45%;
    border: 1px solid var(--gray-200);
    transition: all var(--transition-normal);
    overflow: hidden;
}

.timeline-content::before {
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

.timeline-content:hover::before {
    transform: scaleX(1);
}

.timeline-content:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
    border-color: var(--primary-200);
}

.timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
}

.timeline-item:nth-child(odd) .timeline-content::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 12px solid white;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    filter: drop-shadow(2px 0 4px rgba(0, 0, 0, 0.1));
}

.timeline-item:nth-child(even) .timeline-content::after {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-right: 12px solid white;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    filter: drop-shadow(-2px 0 4px rgba(0, 0, 0, 0.1));
}

.timeline-dot {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: var(--shadow-lg);
    z-index: 3;
    transition: all var(--transition-normal);
}

.timeline-dot:hover {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: var(--shadow-xl);
}

.timeline-content h3 {
    color: var(--primary-700);
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: var(--space-2);
    transition: color var(--transition-normal);
}

.timeline-content:hover h3 {
    color: var(--secondary-700);
}

.timeline-content p {
    color: var(--gray-600);
    line-height: 1.6;
    margin: 0;
}

.timeline-content p:first-of-type {
    font-weight: 600;
    color: var(--gray-700);
    margin-bottom: var(--space-3);
    font-size: 1.125rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .timeline-content {
        padding: var(--space-6);
    }
}

@media (max-width: 768px) {
    .timeline::before {
        left: 24px;
    }
    
    .timeline-content {
        width: calc(100% - 72px);
        margin-left: 72px !important;
        padding: var(--space-6);
    }
    
    .timeline-item:nth-child(odd) .timeline-content::after,
    .timeline-item:nth-child(even) .timeline-content::after {
        display: none;
    }
    
    .timeline-dot {
        left: 24px;
        width: 20px;
        height: 20px;
    }
    
    .timeline-item {
        margin: var(--space-8) 0;
    }
}

@media (max-width: 480px) {
    .timeline {
        padding: var(--space-6) 0;
    }
    
    .timeline-content {
        padding: var(--space-4);
        margin-left: 60px !important;
        width: calc(100% - 60px);
    }
    
    .timeline::before {
        left: 20px;
    }
    
    .timeline-dot {
        left: 20px;
        width: 16px;
        height: 16px;
    }
    
    .timeline-item {
        margin: var(--space-6) 0;
    }
    
    .timeline-content h3 {
        font-size: 1.25rem;
    }
    
    .timeline-content p:first-of-type {
        font-size: 1rem;
    }
}

/* Animation delays for staggered effect */
.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
</style>