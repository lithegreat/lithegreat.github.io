<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="sticky-top shadow-sm">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-custom">
        <RouterLink class="navbar-brand fw-bold" to="/">
          <i class="fas fa-user-circle me-2"></i>Hengsheng Li
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/" @click="isMenuOpen = false"> Home </RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" @click="isMenuOpen = false"> About </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills" @click="isMenuOpen = false"> Skills </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" @click="isMenuOpen = false"> Projects </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  position: relative;
  padding: 8px 15px;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 70%;
}
</style>
