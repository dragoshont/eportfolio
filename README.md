## Dragos Hont – MSc Artificial Intelligence e‑Portfolio

### Overview
Welcome to my e‑portfolio. This repository documents my academic journey through the MSc Artificial Intelligence programme at the University of Essex Online. It serves as both a reflective record of my learning and a showcase of my technical, creative, and professional development.

The portfolio aligns with programme outcomes by:
- Demonstrating applied computing and AI skills.
- Reflecting critically on my strengths, challenges, and growth.
- Connecting coursework to broader social, ethical, and global contexts.
- Presenting artefacts that highlight creativity, technical aptitude, and employability.

**Live Site:** [https://dragoshont.github.io/eportfolio/](https://dragoshont.github.io/eportfolio/)

---

### About Me
I am Dragos Hont, a resilient and systems‑oriented learner based in Bucharest, Romania. My academic and professional interests include:
- **Artificial Intelligence & Machine Learning** – workflow mining, specification‑driven development, and applied AI.
- **Structured Workflows** – modular, checklist‑driven approaches to technical and everyday tasks.
- **Culinary & Creative Experimentation** – applying iterative refinement and modular thinking beyond computing.

This portfolio reflects my commitment to rigorous, reproducible work and my adaptability across technical and practical domains.

---

### Technical Setup

This e-portfolio is built using:
- **[Hugo](https://gohugo.io/)** - Fast static site generator
- **[Hugo Blox (Wowchemy)](https://hugoblox.com/)** - Academic theme for Hugo
- **GitHub Actions** - Automated builds and deployment to GitHub Pages

### Repository Structure

The repository is organised into the following sections:

```
eportfolio/
├── content/           # Site content
│   ├── authors/      # Author profiles
│   ├── post/         # Blog posts and reflections
│   ├── project/      # Project portfolios
│   └── publication/  # Academic publications
├── static/           # Static assets (images, files)
├── config/           # Hugo configuration
└── .github/
    └── workflows/    # GitHub Actions CI/CD
```

---

### How to Update Content

#### Add a New Reflection/Post

1. Create a new folder in `content/post/my-post-name/`
2. Add an `index.md` file with frontmatter:

```yaml
---
title: "My Post Title"
date: 2024-12-14
draft: false
summary: "Brief summary of the post"
tags:
  - Reflection
  - AI
---

Your content here...
```

3. Commit and push - GitHub Actions will automatically rebuild and deploy

#### Add a New Project

1. Create a new folder in `content/project/my-project/`
2. Add an `index.md` file following the project template
3. Optionally add a `featured.jpg` or `featured.png` image
4. Commit and push

#### Update Author Profile

Edit `content/authors/admin/_index.md` to update your bio, interests, education, and social links.

### Local Development

To run the site locally:

```bash
# Install Hugo Extended v0.139.4+
# Download from: https://github.com/gohugoio/hugo/releases

# Clone the repository
git clone https://github.com/dragoshont/eportfolio.git
cd eportfolio

# Initialize Hugo modules
hugo mod get -u
hugo mod tidy

# Start the development server
hugo server -D

# View at http://localhost:1313/eportfolio/
```

### Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

The workflow:
1. Checks out the repository
2. Installs Hugo Extended
3. Downloads Hugo modules
4. Builds the site
5. Deploys to GitHub Pages

---

### Goals
Through this portfolio, I aim to:
- Showcase my technical proficiency in AI and computing.
- Demonstrate creativity and problem‑solving in diverse contexts.
- Provide evidence of continuous learning and adaptability.
- Build a professional narrative that supports career progression in AI and technology.

---

### References
This portfolio is developed in line with guidance from the University of Essex Online and academic frameworks such as Lorenzo & Ittelson (2005), *An Overview of E‑Portfolios* (Educause Learning Initiative).

---

### License

- **Code**: MIT License
- **Content**: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)

See `LICENSE` and `LICENSE-CONTENT` for details.

---

### Contact

- **GitHub**: [@dragoshont](https://github.com/dragoshont)
- **LinkedIn**: [dragoshont](https://linkedin.com/in/dragoshont)
- **X/Twitter**: [@DragosHont](https://x.com/DragosHont)
- **Blog**: [dragoshont.com](https://dragoshont.com/)

