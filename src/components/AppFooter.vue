<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark text-white py-5">
    <div class="container-custom">
      <div class="row gy-4">
        <div class="col-lg-4">
          <h4 class="mb-4">Hengsheng Li</h4>
          <p class="mb-0">
            Master's Student in Electrical Engineering and Information Technology at Technical
            University of Munich
          </p>
        </div>

        <div class="col-lg-4">
          <h4 class="mb-4">Contact</h4>
          <p class="mb-1"><i class="fas fa-envelope me-2"></i>muzimichaed@gmail.com</p>
          <p><i class="fas fa-map-marker-alt me-2"></i>Munich, Germany</p>
        </div>

        <div class="col-lg-4">
          <h4 class="mb-4">Connect</h4>
          <div class="d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/hengsheng-li/"
              target="_blank"
              class="text-white fs-4"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/lithegreat" target="_blank" class="text-white fs-4">
              <i class="fab fa-github"></i>
            </a>
            <!-- <a href="https://x.com" target="_blank" class="text-white fs-4">
              <i class="fab fa-x-twitter"></i>
            </a> -->
          </div>
        </div>
      </div>

      <hr class="my-4 bg-light" />

      <div class="text-center">
        <p class="mb-0">&copy; {{ currentYear }} Hengsheng Li. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer a {
  transition: all 0.3s ease;
}

footer a:hover {
  color: var(--primary) !important;
  transform: translateY(-3px);
}
</style>
