<template>
    <section id="skills" class="section section-gray">
        <div class="container">
            <h2 class="section-title">Technical Skills</h2>
            <div class="skills-grid">
                <div class="skill-category" v-for="category in skills" :key="category.name">
                    <h3>
                        <i :class="category.icon"></i>
                        {{ category.name }}
                    </h3>
                    <div class="skill-tags">
                        <span class="skill-tag" v-for="skill in category.items" :key="skill">{{ skill }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
    {
        name: "Backend Development",
        icon: "fas fa-server",
        items: ["Node.js (JavaScript/TypeScript)", "Go", "PHP"]
    },
    {
        name: "Frontend Development",
        icon: "fas fa-server",
        items: ["React.js", "Vue.js"]
    },
    {
        name: "Databases",
        icon: "fas fa-database",
        items: ["MongoDB", "Oracle", "PostgreSQL", "MySQL", "Redis"]
    },
    {
        name: "Cloud",
        icon: "fas fa-cloud",
        items: ["AWS", "Google Cloud Platform (GCP)"]
    },
    {
        name: "Tools & Technologies",
        icon: "fas fa-tools",
        items: ["Kafka", "Docker", "Git", "Kubernetes", "Datadog"]
    },
    {
        name: "Specializations",
        icon: "fas fa-shield-alt",
        items: ["REST APIs", "Microservices", "Database Management", "Web Socket", "Migrating Data"]
    }
]);
</script>

<style scoped>
/* ========================================
   MODERN SKILLS SECTION
   ======================================== */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-8);
}

.skill-category {
    background: white;
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--gray-200);
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.skill-category::before {
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

.skill-category:hover::before {
    transform: scaleX(1);
}

.skill-category:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-200);
}

.skill-category h3 {
    color: var(--primary-700);
    margin-bottom: var(--space-6);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: 1.5rem;
    font-weight: 700;
    transition: color var(--transition-normal);
}

.skill-category:hover h3 {
    color: var(--secondary-700);
}

.skill-category h3 i {
    font-size: 1.75rem;
    color: var(--primary-600);
    transition: all var(--transition-normal);
}

.skill-category:hover h3 i {
    transform: scale(1.1);
    color: var(--secondary-600);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
}

.skill-tag {
    background: linear-gradient(45deg, var(--primary-500), var(--secondary-500));
    color: white;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: 0.875rem;
    font-weight: 600;
    transition: all var(--transition-normal);
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
}

.skill-tag::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.skill-tag:hover::before {
    left: 100%;
}

.skill-tag:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-300);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--space-4);
    }
    
    .skill-category {
        padding: var(--space-6);
    }
}

@media (max-width: 768px) {
    .skills-grid {
        grid-template-columns: 1fr;
        gap: var(--space-4);
        margin-top: var(--space-6);
    }
    
    .skill-category {
        padding: var(--space-6);
    }
    
    .skill-category h3 {
        font-size: 1.25rem;
        margin-bottom: var(--space-4);
    }
    
    .skill-category h3 i {
        font-size: 1.5rem;
    }
    
    .skill-tags {
        gap: var(--space-2);
    }
    
    .skill-tag {
        font-size: 0.8rem;
        padding: var(--space-1) var(--space-3);
    }
}

@media (max-width: 480px) {
    .skill-category {
        padding: var(--space-4);
    }
    
    .skill-category h3 {
        font-size: 1.125rem;
        margin-bottom: var(--space-3);
        gap: var(--space-2);
    }
    
    .skill-category h3 i {
        font-size: 1.25rem;
    }
    
    .skill-tags {
        gap: var(--space-1);
    }
    
    .skill-tag {
        font-size: 0.75rem;
        padding: var(--space-1) var(--space-2);
    }
}

/* Animation delays for staggered effect */
.skill-category:nth-child(1) { animation-delay: 0.1s; }
.skill-category:nth-child(2) { animation-delay: 0.2s; }
.skill-category:nth-child(3) { animation-delay: 0.3s; }
.skill-category:nth-child(4) { animation-delay: 0.4s; }
.skill-category:nth-child(5) { animation-delay: 0.5s; }
.skill-category:nth-child(6) { animation-delay: 0.6s; }
</style>