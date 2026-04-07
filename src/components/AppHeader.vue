<template>
  <header class="site-header">
    <div class="shell">
      <div class="brand">
        <span class="mark" aria-hidden="true"></span>
        <a class="brand-name" href="#hero">Storm Studdart</a>
        <span class="role">Full Stack Developer</span>
      </div>
      <nav class="nav">
        <a href="#projects">Projects</a>
        <a href="#skills-experience">Skills</a>
        <a href="#intro-video">Intro Video</a>
        <a href="#contact">Contact</a>
        <a class="btn secondary" href="#contact">Let’s talk</a>
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

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--muted);
}

.brand-name {
  font-family: var(--font-head);
  font-size: 17px;
  letter-spacing: 0.04em;
  color: var(--ink);
}

.role {
  color: var(--muted);
}

.mark {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface-dark);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--surface-dark) 24%, transparent);
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

@media (max-width: 720px) {
  .shell {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
