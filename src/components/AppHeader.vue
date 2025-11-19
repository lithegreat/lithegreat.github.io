<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useLanguage } from '@/composables/useLanguage'

const { cvData, toggleLanguage, currentLang } = useLanguage()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: isScrolled }">
    <div class="container-custom header-content">
      <RouterLink class="logo" to="/">
        <span class="logo-icon">{{ cvData.initials }}</span>
        <span class="logo-text">{{ cvData.name }}</span>
      </RouterLink>

      <div class="d-flex align-items-center gap-3">
        <button class="lang-btn" @click="toggleLanguage">
          {{ currentLang === 'en' ? '中文' : 'EN' }}
        </button>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle navigation">
          <span class="bar" :class="{ open: isMenuOpen }"></span>
          <span class="bar" :class="{ open: isMenuOpen }"></span>
          <span class="bar" :class="{ open: isMenuOpen }"></span>
        </button>
      </div>

      <nav :class="{ 'nav-open': isMenuOpen }">
        <ul class="nav-list">
          <li>
            <RouterLink class="nav-link" to="/" @click="isMenuOpen = false">{{
              cvData.ui.nav.home
            }}</RouterLink>
          </li>
          <li>
            <a class="nav-link" href="#about" @click="isMenuOpen = false">{{
              cvData.ui.nav.about
            }}</a>
          </li>
          <li>
            <a class="nav-link" href="#skills" @click="isMenuOpen = false">{{
              cvData.ui.nav.skills
            }}</a>
          </li>
          <li>
            <a class="nav-link" href="#projects" @click="isMenuOpen = false">{{
              cvData.ui.nav.projects
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

header.scrolled {
  padding: 15px 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-main);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 800;
}

.nav-list {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.lang-btn {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 4px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.lang-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s ease;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: var(--bg-surface);
    padding: 80px 40px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  }

  nav.nav-open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 24px;
  }

  .bar.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .bar.open:nth-child(2) {
    opacity: 0;
  }

  .bar.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }
}
</style>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 20px 0;
  transition: all 0.3s ease;
  background: transparent;
}

header.scrolled {
  padding: 15px 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-main);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 800;
}

.nav-list {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-muted);
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.bar {
  width: 24px;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s ease;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background: var(--bg-surface);
    padding: 80px 40px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
  }

  nav.nav-open {
    right: 0;
  }

  .nav-list {
    flex-direction: column;
    gap: 24px;
  }

  .bar.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .bar.open:nth-child(2) {
    opacity: 0;
  }

  .bar.open:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -6px);
  }
}
</style>
