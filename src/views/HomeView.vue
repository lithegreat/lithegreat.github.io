<script setup>
import { ref, onMounted } from 'vue'

// 响应式数据
const skills = ref([
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'C++'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Bash', 'Linux', 'Continuous Integration (CI/CD)', 'Unit Testing'],
  },
  {
    category: 'Hardware Knowledge',
    items: ['Digital Design', 'VHDL', 'RISC-V Custom Instruction Extension'],
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'German (Fluent, C1)', 'Chinese (Native)'],
  },
])

const projects = ref([
  {
    title: 'Evaluation of OpenASIP Custom Operations in CoreDSL Ecosystem',
    type: 'Bachelor Thesis',
    points: [
      'Extended a RISC-V instruction set by implementing custom operations in C and Python on Linux systems',
      'Automated data extraction and analysis workflows using Python and Bash scripting',
      'Gained hands-on experience with embedded processor simulation and benchmarking',
    ],
  },
  {
    title: 'Asynchronous Transfer Mode Implementation',
    type: 'VHDL Lab',
    points: [
      'Developed and simulated ATM components, ensuring proper data transmission through asynchronous communication',
      'Synthesized the VHDL models into gate-level netlists, validating functionality in hardware environments',
    ],
  },
  {
    title: 'Embedded System Design for Machine Learning',
    type: 'Embedded ML Project',
    points: [
      'Trained a lightweight keyword spotting (KWS) neural network using TensorFlow/Keras',
      'Quantized and deployed the model using MicroTVM and ESP-IDF on embedded devices',
      'Implemented ROM/RAM/MACs estimation tools and model evaluation metrics in Python',
      'Extended embedded C++ code for real-time posterior processing and parameter tuning',
      'Developed an efficient 8-bit vectorized multiplier module in VHDL',
    ],
  },
  {
    title: 'Multidimensional IMU Data Analysis and Visualization',
    type: 'Research Internship',
    points: [
      'Processed and analyzed high-dimensional IMU sensor data using Python and scientific libraries',
      'Developed custom data visualization tools to study motion patterns and sensor relationships',
      'Gained experience in time-series data processing, feature extraction, and visualization with Matplotlib/Seaborn',
    ],
  },
  {
    title: 'Geometric Library Maintenance',
    type: 'Software Engineering Praktikum',
    points: [
      'Refactored a C++ geometric computation library and integrated automated unit testing',
      'Set up CI/CD pipelines using GitLab to ensure code quality and continuous integration',
      'Enhanced version control practices using Git under a Linux development environment',
    ],
  },
  {
    title: 'Music Video Generation Automation',
    type: 'Personal Project',
    points: [
      'Developed a Python-based automation tool by integrating open-source AI models',
      'Focused on automating media processing tasks and improving operational efficiency',
    ],
  },
])

const isVisible = ref(false)

onMounted(() => {
  // 动画触发
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero d-flex align-items-center">
      <div class="container-custom">
        <div class="row align-items-center gy-5">
          <div class="col-lg-6" :class="{ 'fade-in-left': isVisible }">
            <h1 class="display-3 fw-bold mb-4">
              Hi, I'm <span class="text-gradient">Hengsheng Li</span>
            </h1>
            <h2 class="h3 mb-4">M.Sc. Electrical Engineering and Information Technology</h2>
            <p class="lead mb-5">
              Graduate Student at Technical University of Munich | Working Student at Infineon
              Technologies
            </p>
            <div class="d-flex gap-3">
              <a href="#about" class="btn btn-primary btn-lg px-4 py-3">
                Learn More <i class="fas fa-arrow-down ms-2"></i>
              </a>
              <a href="mailto:muzimichaed@gmail.com" class="btn btn-outline-dark btn-lg px-4 py-3">
                Contact Me
              </a>
            </div>
          </div>
          <div class="col-lg-6 text-center" :class="{ 'fade-in-right': isVisible }">
            <div class="profile-image-container mx-auto">
              <div class="profile-image">
                <img src="@/assets/images/profile.jpg" alt="Profile Image" class="img-fluid rounded-circle" />
              </div>
              <div class="decoration-circle"></div>
              <div class="decoration-dots"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white">
      <div class="container-custom">
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="section-header text-center mb-5">
              <h2 class="display-5 fw-bold mb-3">About Me</h2>
              <div class="divider mx-auto"></div>
            </div>

            <div class="card border-0 shadow-lg mb-5">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-box bg-primary me-4">
                    <i class="fas fa-graduation-cap fa-2x text-white"></i>
                  </div>
                  <h3 class="mb-0">Education</h3>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <h4 class="mb-1">Technical University of Munich (TUM)</h4>
                    <p class="text-primary fw-medium mb-1">
                      Master of Science in Electrical Engineering and Information Technology
                    </p>
                    <p class="text-muted mb-2">04.2025 – Present</p>
                  </div>

                  <div class="timeline-item">
                    <h4 class="mb-1">Technical University of Munich (TUM)</h4>
                    <p class="text-primary fw-medium mb-1">
                      Bachelor of Science in Electrical Engineering and Information Technology
                    </p>
                    <p class="text-muted mb-2">10.2021 – 03.2025 | GPA: 2.1/1.0</p>
                    <p class="mb-0">
                      Relevant Coursework: System-on-Chip, Embedded Systems & Security, Software
                      Engineering Lab, VHDL Lab, Python for Engineering Data Analysis, Digital
                      Circuits, Embedded System Design for Machine Learning
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-lg">
              <div class="card-body p-4 p-lg-5">
                <div class="d-flex align-items-center mb-4">
                  <div class="icon-box bg-primary me-4">
                    <i class="fas fa-briefcase fa-2x text-white"></i>
                  </div>
                  <h3 class="mb-0">Experience</h3>
                </div>

                <div class="timeline">
                  <div class="timeline-item">
                    <h4 class="mb-1">Infineon Technologies AG</h4>
                    <p class="text-primary fw-medium mb-1">
                      Working Student - Hardware Development
                    </p>
                    <p class="text-muted mb-2">June 2025 - Present</p>
                    <ul class="mb-0">
                      <li>
                        Improve workflows for hardware CI/CD (Continuous Integration/Continuous
                        Deployment)
                      </li>
                      <li>Tools and Languages: Python, Git, Jenkins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-padding bg-light">
      <div class="container-custom">
        <div class="section-header text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Technical Skills</h2>
          <div class="divider mx-auto"></div>
        </div>

        <div class="row g-4">
          <div
            v-for="(skillGroup, index) in skills"
            :key="skillGroup.category"
            class="col-lg-3 col-md-6"
          >
            <div
              class="card h-100 border-0 shadow-sm skill-card"
              :class="{ 'fade-in': isVisible }"
              :style="{ 'transition-delay': `${index * 100}ms` }"
            >
              <div class="card-body p-4">
                <h3 class="h5 mb-3 text-primary">{{ skillGroup.category }}</h3>
                <ul class="skill-list">
                  <li v-for="item in skillGroup.items" :key="item">
                    <i class="fas fa-check-circle text-success me-2"></i>{{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-padding">
      <div class="container-custom">
        <div class="section-header text-center mb-5">
          <h2 class="display-5 fw-bold mb-3">Project Experience</h2>
          <div class="divider mx-auto"></div>
          <p class="lead mx-auto mt-4" style="max-width: 700px">
            Hands-on projects in embedded systems, hardware design, and software development
          </p>
        </div>

        <div class="row g-4">
          <div v-for="(project, index) in projects" :key="project.title" class="col-lg-6">
            <div
              class="card h-100 border-0 shadow-sm project-card"
              :class="{ 'fade-in': isVisible }"
              :style="{ 'transition-delay': `${index * 100}ms` }"
            >
              <div class="card-body p-4">
                <h3 class="h4 mb-3">{{ project.title }}</h3>
                <div class="badge bg-primary mb-3">{{ project.type }}</div>
                <ul class="project-points">
                  <li v-for="(point, pIndex) in project.points" :key="pIndex">
                    {{ point }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
  padding-top: 80px;
}

.profile-image-container {
  position: relative;
  width: 350px;
  height: 350px;
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(45deg, #6a11cb 0%, #2575fc 100%);
  z-index: 2;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* .initials {
  font-size: 5rem;
  font-weight: 700;
  color: white;
  opacity: 0.8;
} */

.decoration-circle {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 15px solid var(--primary);
  z-index: 1;
}

.decoration-dots {
  position: absolute;
  bottom: -15px;
  left: -15px;
  width: 80px;
  height: 80px;
  background-image: radial-gradient(var(--primary) 3px, transparent 3px);
  background-size: 15px 15px;
  z-index: 1;
}

.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  position: relative;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  height: calc(100% - 20px);
  width: 3px;
  background: var(--primary);
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 30px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 8px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid white;
}

.skill-card,
.project-card {
  transition: all 0.5s ease;
  transform: translateY(30px);
  opacity: 0;
}

.skill-card.fade-in,
.project-card.fade-in {
  transform: translateY(0);
  opacity: 1;
}

.skill-list {
  list-style: none;
  padding-left: 0;
}

.skill-list li {
  margin-bottom: 12px;
  padding-left: 28px;
  position: relative;
}

.skill-list li i {
  position: absolute;
  left: 0;
  top: 5px;
}

.project-points {
  padding-left: 20px;
}

.project-points li {
  margin-bottom: 8px;
  position: relative;
}

.project-points li::before {
  content: '•';
  color: var(--primary);
  font-weight: bold;
  position: absolute;
  left: -15px;
}

.divider {
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 10px;
}

/* 动画效果 */
.fade-in-left {
  animation: fadeInLeft 0.8s ease forwards;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease forwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式调整 */
@media (max-width: 992px) {
  .profile-image-container {
    width: 300px;
    height: 300px;
  }

  .initials {
    font-size: 4rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 120px;
    padding-bottom: 60px;
  }

  .profile-image-container {
    width: 250px;
    height: 250px;
    margin-top: 30px;
  }

  .initials {
    font-size: 3rem;
  }

  .display-3 {
    font-size: 2.5rem;
  }
}
</style>
