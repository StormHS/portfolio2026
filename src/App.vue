<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'
import SkillsExperienceSection from './components/SkillsExperienceSection.vue'
import IntroVideoSection from './components/IntroVideoSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="page">
    <AppHeader />
    <main>
      <HeroSection />
      <ProjectsGrid />
      <SkillsExperienceSection />
      <IntroVideoSection />
    </main>
    <AppFooter />
  </div>
</template>

<style>
:root {
  color-scheme: light;
  --paper: #f7f5f0;
  --ink: #444;
  --surface-dark: #415449;
  --accent: #415449;
  --lines: #e5dfd4;
  --muted: #5b6475;
  --shadow-soft: 0 12px 40px rgba(15, 23, 42, 0.08);
  --radius: 18px;
  --font-body: 'Soehne', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-head: 'Playfair Display', 'DM Serif Display', 'Cormorant Garamond', serif;
  --ease: cubic-bezier(0.33, 1, 0.68, 1);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--paper);
  color: var(--ink);
  line-height: 1.6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page {
  min-height: 100vh;
  background:
    radial-gradient(circle at 20% 20%, rgba(212, 73, 47, 0.04), transparent 28%),
    radial-gradient(circle at 80% 10%, rgba(20, 122, 108, 0.04), transparent 32%), var(--paper);
  color: var(--ink);
}

main {
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 10vw, 104px);
  padding: clamp(16px, 5vw, 64px) clamp(18px, 7vw, 72px) clamp(40px, 8vw, 96px);
}

.shell {
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
}

.section {
  max-width: 1180px;
  margin: 0 auto;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.eyebrow::before {
  content: '';
  width: 32px;
  height: 1px;
  background: var(--lines);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  transition:
    transform 220ms var(--ease),
    box-shadow 220ms var(--ease),
    border-color 220ms var(--ease),
    color 220ms var(--ease),
    background-color 220ms var(--ease);
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
  border-color: var(--accent);
  color: var(--accent);
  box-shadow: 0 10px 30px rgba(212, 73, 47, 0.12);
  outline: none;
}

.btn:active {
  transform: translateY(0);
}

.btn.secondary {
  border-color: transparent;
  background: var(--surface-dark);
  color: var(--paper);
}

.btn.secondary:hover,
.btn.secondary:focus-visible {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--paper);
  box-shadow: 0 10px 30px rgba(212, 73, 47, 0.2);
}

.text-link {
  position: relative;
  color: var(--ink);
  font-weight: 500;
  padding-bottom: 4px;
}

.text-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: color-mix(in srgb, var(--accent) 55%, var(--muted));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms var(--ease);
}

.text-link:hover::after,
.text-link:focus-visible::after {
  transform: scaleX(1);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
