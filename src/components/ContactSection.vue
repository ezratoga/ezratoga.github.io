<template>
    <section id="contact" class="section section-gray">
        <div class="container">
            <h2 class="section-title">Let's Connect</h2>
            <div class="contact-content">
                <form class="contact-form" @submit.prevent="submitForm">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="contactForm.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="contactForm.email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" v-model="contactForm.message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-paper-plane"></i>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const contactForm = ref({
    name: '',
    email: '',
    message: ''
});
</script>

<style scoped>
/* Contact Content */
.contact-content {
    display: flex;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
}

.section-title {
    margin-bottom: 3rem;
    text-align: center;
}

/* Contact Form */
.contact-form {
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border: 1px solid #e2e8f0;
    width: 100%;
    position: relative;
    overflow: hidden;
}

.contact-form::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(45deg, #667eea, #764ba2);
}

.form-group {
    margin-bottom: 2rem;
    position: relative;
}

.form-group label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: #2d3748;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.25rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    font-family: inherit;
    background: #fafafa;
    color: #2d3748;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
}

.form-group input:focus + label,
.form-group textarea:focus + label {
    color: #667eea;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.btn {
    padding: 1.25rem 3rem;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    transition: all 0.3s ease;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.btn-primary:active {
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .contact-content {
        max-width: 600px;
    }
    
    .contact-form {
        padding: 2.5rem;
    }
}

@media (max-width: 768px) {
    .contact-content {
        max-width: 100%;
        padding: 0 1.5rem;
    }
    
    .contact-form {
        padding: 2rem;
        border-radius: 16px;
    }
    
    .section-title {
        margin-bottom: 2.5rem;
        font-size: 2.25rem;
    }
    
    .form-group {
        margin-bottom: 1.75rem;
    }
    
    .form-group input,
    .form-group textarea {
        padding: 1rem;
    }
    
    .btn {
        padding: 1rem 2rem;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .contact-content {
        padding: 0 1rem;
    }
    
    .contact-form {
        padding: 1.5rem;
        border-radius: 12px;
    }
    
    .section-title {
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
    }
    
    .form-group input,
    .form-group textarea {
        padding: 0.875rem;
        font-size: 0.95rem;
        border-radius: 8px;
    }
    
    .btn {
        padding: 0.875rem 1.5rem;
        font-size: 0.95rem;
        letter-spacing: 0.25px;
    }
}

@media (max-width: 360px) {
    .contact-form {
        padding: 1.25rem;
    }
    
    .section-title {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
    }
    
    .form-group input,
    .form-group textarea {
        padding: 0.75rem;
    }
    
    .btn {
        padding: 0.75rem 1.25rem;
    }
}
</style>