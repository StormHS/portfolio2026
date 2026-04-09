<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="shell">
      <div class="brand-row">
        <div class="brand">
          <span class="mark" aria-hidden="true"></span>
          <a class="brand-name" href="#hero" @click="closeMenu">Storm Studdart</a>
          <span class="role">Full Stack Developer</span>
        </div>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <svg v-if="!isMenuOpen" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <nav id="site-nav" class="nav" :class="{ 'nav--open': isMenuOpen }">
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#skills-experience" @click="closeMenu">Skills</a>
        <a href="#intro-video" @click="closeMenu">Intro Video</a>
        <a href="#contact" @click="closeMenu">Contact</a>
        <a class="btn secondary" href="#contact" @click="closeMenu">Let’s talk</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: color-mix(in srgb, var(--paper) 90%, transparent);
  border-bottom: 1px solid var(--lines);
}

.shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 18px clamp(16px, 5vw, 24px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1;
  min-width: 0;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--muted);
  min-width: 0;
}

.brand-name {
  font-family: var(--font-head);
  font-size: 17px;
  letter-spacing: 0.04em;
  color: var(--ink);
  white-space: nowrap;
}

.role {
  color: var(--muted);
  white-space: nowrap;
}

.mark {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface-dark);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--surface-dark) 24%, transparent);
  flex: 0 0 auto;
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--lines);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--ink);
  cursor: pointer;
}

.menu-toggle svg {
  width: 18px;
  height: 18px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  fill: none;
}

.menu-toggle:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--accent) 65%, white);
  outline-offset: 2px;
}

.nav {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-size: 15px;
}

.nav a {
  padding: 8px 10px;
  border-radius: 999px;
  transition:
    color 160ms var(--ease),
    background-color 160ms var(--ease);
}

.nav a:not(.btn):hover,
.nav a:not(.btn):focus-visible {
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  outline: none;
}

@media (max-width: 900px) {
  .brand {
    gap: 10px;
    font-size: 14px;
  }

  .role {
    display: none;
  }
}

@media (max-width: 720px) {
  .shell {
    display: block;
    padding-block: 14px;
  }

  .menu-toggle {
    display: inline-flex;
  }

  .nav {
    display: none;
    width: 100%;
    margin-top: 12px;
    padding: 12px;
    border: 1px solid var(--lines);
    border-radius: calc(var(--radius) + 2px);
    background: color-mix(in srgb, var(--paper) 94%, white);
    box-shadow: var(--shadow-soft);
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
  }

  .nav--open {
    display: flex;
  }

  .nav a {
    padding: 10px 12px;
  }

  .nav .btn.secondary {
    margin-top: 4px;
  }
}
</style>
