/**
 * Pattarapon Kreepan - Resume & Portfolio Script
 * Modern Web Best Practices: Lightweight, Accessible, Native APIs
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initClipboardButtons();
  initScrollSpy();
});

/* ==========================================================================
   Theme Toggle System (Modern Web Guidance Compliant)
   ========================================================================== */

function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

  if (!themeBtn || !metaColorScheme) return;

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getCurrentTheme() {
    const metaVal = metaColorScheme.content;
    if (metaVal === 'dark' || metaVal === 'light') {
      return metaVal;
    }
    return getSystemPreference();
  }

  function applyTheme(target) {
    if (target === 'system') {
      metaColorScheme.content = 'light dark';
      document.documentElement.removeAttribute('data-theme');
      try {
        localStorage.removeItem('theme-override');
      } catch (e) {}
    } else {
      metaColorScheme.content = target;
      document.documentElement.setAttribute('data-theme', target);
      try {
        localStorage.setItem('theme-override', target);
      } catch (e) {}
    }
  }

  themeBtn.addEventListener('click', () => {
    const current = getCurrentTheme();
    const system = getSystemPreference();
    const next = current === 'dark' ? 'light' : 'dark';

    // If target equals system preference, user is resetting override back to system
    if (next === system) {
      applyTheme('system');
      showToast(`Switched to System theme (${next})`);
    } else {
      applyTheme(next);
      showToast(`Switched to ${next.charAt(0).toUpperCase() + next.slice(1)} mode`);
    }
  });

  // Listen for OS scheme changes across tabs and windows
  window.addEventListener('storage', (e) => {
    if (e.key === 'theme-override') {
      if (e.newValue) {
        metaColorScheme.content = e.newValue;
        document.documentElement.setAttribute('data-theme', e.newValue);
      } else {
        metaColorScheme.content = 'light dark';
        document.documentElement.removeAttribute('data-theme');
      }
    }
  });
}

/* ==========================================================================
   Mobile Navigation Menu
   ========================================================================== */

function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking any nav link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ==========================================================================
   Clipboard Copy with Toast
   ========================================================================== */

let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function initClipboardButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied to clipboard: ${text}`);
      } catch (err) {
        // Fallback for non-https or older browser permissions
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showToast(`Copied: ${text}`);
        } catch (e) {
          showToast(`Contact: ${text}`);
        }
        document.body.removeChild(textarea);
      }
    });
  });
}

/* ==========================================================================
   Active Navigation Link on Scroll (IntersectionObserver)
   ========================================================================== */

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}
