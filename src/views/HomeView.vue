<script setup>
import { ref, onMounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { cvData } = useLanguage()
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container-custom hero-content">
        <div class="hero-text" :class="{ 'fade-in-up': isVisible }">
          <span class="greeting">{{ cvData.ui.hero.greeting }}</span>
          <h1 class="name">
            {{ cvData.name.split(' ')[0] }}
            <span class="text-gradient">{{ cvData.name.split(' ')[1] }}</span>
          </h1>
          <h2 class="title">{{ cvData.title }}</h2>
          <p class="description">
            {{ cvData.description }}
          </p>
          <div class="cta-buttons">
            <a href="#projects" class="btn btn-primary">{{ cvData.ui.hero.btnProject }}</a>
            <a :href="`mailto:${cvData.email}`" class="btn btn-outline">{{
              cvData.ui.hero.btnContact
            }}</a>
          </div>
        </div>
        <div class="hero-image" :class="{ 'fade-in-up': isVisible }" style="animation-delay: 0.2s">
          <div class="image-wrapper">
            <img src="@/assets/images/profile.jpg" :alt="cvData.name" />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding">
      <div class="container-custom">
        <div class="section-header">
          <h2>{{ cvData.ui.about.title }}</h2>
          <div class="divider"></div>
        </div>

        <div class="about-grid">
          <div class="about-card">
            <div class="card-icon"><i class="fas fa-graduation-cap"></i></div>
            <h3>{{ cvData.ui.about.education }}</h3>
            <div class="timeline">
              <div v-for="(edu, index) in cvData.education" :key="index" class="timeline-item">
                <span class="date">{{ edu.date }}</span>
                <h4>{{ edu.degree }}</h4>
                <p class="institution">{{ edu.institution }}</p>
                <p v-if="edu.gpa" class="gpa">{{ edu.gpa }}</p>
              </div>
            </div>
          </div>

          <div class="about-card">
            <div class="card-icon"><i class="fas fa-briefcase"></i></div>
            <h3>{{ cvData.ui.about.experience }}</h3>
            <div class="timeline">
              <div v-for="(job, index) in cvData.experience" :key="index" class="timeline-item">
                <span class="date">{{ job.date }}</span>
                <h4>{{ job.role }}</h4>
                <p class="institution">{{ job.company }}</p>
                <p class="desc">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-padding bg-surface">
      <div class="container-custom">
        <div class="section-header">
          <h2>{{ cvData.ui.skills.title }}</h2>
          <div class="divider"></div>
        </div>

        <div class="skills-grid">
          <div v-for="group in cvData.skills" :key="group.category" class="skill-card">
            <div class="skill-header">
              <i :class="group.icon"></i>
              <h3>{{ group.category }}</h3>
            </div>
            <div class="skill-tags">
              <span v-for="item in group.items" :key="item" class="skill-tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding">
      <div class="container-custom">
        <div class="section-header">
          <h2>{{ cvData.ui.projects.title }}</h2>
          <div class="divider"></div>
        </div>

        <div class="projects-grid">
          <div v-for="project in cvData.projects" :key="project.title" class="project-card">
            <div class="project-content">
              <div class="project-header">
                <span class="project-type">{{ project.type }}</span>
                <h3>{{ project.title }}</h3>
              </div>
              <ul class="project-points">
                <li v-for="(point, i) in project.points" :key="i">{{ point }}</li>
              </ul>
            </div>
            <div class="project-footer">
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.greeting {
  color: var(--primary);
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: block;
}

.name {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
}

.title {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 20px;
  font-weight: 500;
}

.description {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
}

.image-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 2px solid var(--border-color);
  margin: 0 auto;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.divider {
  width: 60px;
  height: 4px;
  background: var(--primary);
  margin: 0 auto;
  border-radius: 2px;
}

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.about-card {
  background: var(--bg-surface);
  padding: 40px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.card-icon {
  width: 50px;
  height: 50px;
  background: rgba(56, 189, 248, 0.1);
  color: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.timeline-item {
  position: relative;
  padding-left: 20px;
  border-left: 2px solid var(--border-color);
  margin-bottom: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item .date {
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

.timeline-item h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.timeline-item .institution {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.skill-card {
  background: var(--bg-body);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.skill-header i {
  font-size: 1.5rem;
  color: var(--primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background: var(--bg-surface);
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: var(--bg-surface);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.project-content {
  padding: 30px;
  flex-grow: 1;
}

.project-type {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 10px;
  display: block;
}

.project-header h3 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  line-height: 1.4;
}

.project-points {
  padding-left: 20px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.project-points li {
  margin-bottom: 10px;
  list-style-type: disc;
}

.project-footer {
  padding: 20px 30px;
  border-top: 1px solid var(--border-color);
  background: rgba(0, 0, 0, 0.2);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  font-size: 0.8rem;
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 10px;
  border-radius: 4px;
}

/* Animations */
.fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }

  .hero-text {
    order: 2;
  }

  .hero-image {
    order: 1;
  }

  .cta-buttons {
    justify-content: center;
  }

  .description {
    margin: 0 auto 40px;
  }

  .name {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .image-wrapper {
    width: 280px;
    height: 280px;
  }
}
</style>
