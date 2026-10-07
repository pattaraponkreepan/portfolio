# Pattarapon Kreepan - Resume & Portfolio Website 🚀

A modern, responsive, and developer-focused portfolio and resume website built with semantic HTML5, modern CSS with `light-dark()` color tokens, and vanilla JavaScript.

## 🌟 Highlights

- **Live Profile & Resume**: Grounded in official credentials as a Computer Science graduate from Chiang Mai University (CAMT).
- **Adaptive Dark / Light Mode**: Implements modern web guidelines using `color-scheme` and `light-dark()` with OS-preference detection and zero flash-of-unstyled-content (FOUC).
- **Interactive Experience & Project Showcase**:
  - Highlights internships across DevOps (OpenTelemetry, AWS, Jenkins), Backend (Java, REST APIs, SQL), and Frontend (React).
  - Highlights senior research in Microservices & OpenTelemetry and Hackathon Smart Aquaponics project.
- **Direct PDF Download**: Integrated with your original resume PDF (`assets/Pattarapon-Kreepan-Resume.pdf`).
- **One-Click Contact Copy**: Instant copy buttons with toast notifications for email and phone.
- **GitHub Integration**: Direct link to [github.com/pattaraponkreepan](https://github.com/pattaraponkreepan).
- **Print & PDF Friendly**: Fully optimized `@media print` stylesheet for clean printing or saving as PDF directly from the browser (Ctrl+P / Cmd+P).

---

## 📂 Project Structure

```
D:\Project\portfolio\
├── assets\
│   ├── Pattarapon-Kreepan-Resume.pdf  # Downloadable PDF resume
│   └── profile.jpg                    # Formal profile portrait
├── index.html                         # Semantic HTML5 layout
├── styles.css                         # Modern CSS styling & themes
├── app.js                             # Theme toggle, clipboard, navigation
└── README.md                          # Documentation & deployment guide
```

---

## 💻 How to Run Locally

You can open `index.html` directly in any web browser, or launch a lightweight local server:

### Option 1: Using Python
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

### Option 2: Using Node.js / npx
```bash
npx serve .
```

### Option 3: VS Code Live Server
Open the folder `D:\Project\portfolio` in VS Code and click **"Go Live"** at the bottom right.

---

## 🌐 Free Hosting & Deployment

### Deploy to GitHub Pages (Recommended)
1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: initial resume portfolio release"
   ```
2. Create a repository on GitHub (e.g. `pattaraponkreepan.github.io` or `portfolio`).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/pattaraponkreepan/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repository settings -> **Pages** -> Select **Branch: main** -> **Save**. Your website will be live in 1-2 minutes!

### Deploy to Vercel or Netlify
- Simply drag-and-drop the `D:\Project\portfolio` folder on [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) for instant deployment with custom domains and SSL.
