<script setup>
import { useLanguage } from '@/composables/useLanguage'
const { cvData } = useLanguage()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container-custom">
      <div class="footer-content">
        <div class="footer-section">
          <h4>{{ cvData.name }}</h4>
          <p>{{ cvData.title }} at {{ cvData.education[0].institution }}</p>
        </div>

        <div class="footer-section">
          <h4>{{ cvData.ui.footer.contact }}</h4>
          <p><i class="fas fa-envelope"></i> {{ cvData.email }}</p>
          <p><i class="fas fa-map-marker-alt"></i> {{ cvData.location }}</p>
        </div>

        <div class="footer-section">
          <h4>{{ cvData.ui.footer.connect }}</h4>
          <div class="social-links">
            <a :href="cvData.socials.linkedin" target="_blank" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a :href="cvData.socials.github" target="_blank" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ cvData.name }}. {{ cvData.ui.footer.rights }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--bg-surface);
  padding: 60px 0 30px;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  color: var(--text-main);
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.footer-section p {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-links a {
  font-size: 1.5rem;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: var(--primary);
  transform: translateY(-3px);
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
}
</style>
