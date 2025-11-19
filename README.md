# Personal Website of Hengsheng Li

A modern, responsive personal portfolio website built with Vue 3 and Vite. This project showcases my education, skills, and projects with a clean, dark-themed design.

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS3 (Variables, Flexbox, Grid)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Deployment**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lithegreat/lithegreat.github.io.git
   cd lithegreat.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Build for Production

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📦 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable Vue components (Header, Footer)
├── composables/     # Shared logic (Language switching)
├── data/            # Content data files (CV, translations)
│   ├── cv.js        # English content
│   └── cv_zh.js     # Chinese content
├── router/          # Vue Router configuration
├── views/           # Page views (HomeView)
├── App.vue          # Root component
├── main.js          # Entry point
└── style.css        # Global styles and variables
```

## 🚀 Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

1.  Push your changes to the `main` branch.
2.  The workflow defined in `.github/workflows/deploy.yml` will automatically build and deploy the site.
3.  Ensure your repository settings have **GitHub Pages** source set to **GitHub Actions**.
