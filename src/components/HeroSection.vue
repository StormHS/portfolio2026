<script setup>
import stormProfileImage from '../assets/stormprofileimage.JPG'
</script>

<template>
  <section id="hero" class="section hero">
    <div class="shell hero__inner">
      <div class="copy">
        <div class="eyebrow">Software Engineer</div>
        <h1>Kia ora, welcome! I'm Storm.</h1>
        <div class="actions">
          <a class="btn secondary" href="#projects">View projects</a>
          <a class="btn" href="#contact">Get in touch</a>
        </div>
      </div>

      <div class="visual">
        <div class="portrait-frame">
          <img class="portrait-image" :src="stormProfileImage" alt="Storm Studdart portrait" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(280px, 0.95fr);
  align-items: center;
  gap: clamp(28px, 5vw, 64px);
  padding-block: clamp(20px, 4vw, 48px);
}

.copy {
  min-width: 0;
}

.copy h1 {
  font-family: var(--font-head);
  font-size: clamp(32px, 6vw, 54px);
  line-height: 1.08;
  letter-spacing: 0.6px;
  margin: 12px 0 16px;
  text-wrap: balance;
}

.lede {
  max-width: 620px;
  color: var(--muted);
  margin: 0 0 28px;
  font-size: 17px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
}

.portrait-frame {
  width: min(100%, 320px);
  aspect-ratio: 4 / 5;
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius) + 10px);
  border: 1px solid color-mix(in srgb, var(--accent) 18%, var(--lines));
  background:
    radial-gradient(circle at top right, color-mix(in srgb, var(--accent) 20%, transparent), transparent 38%),
    linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.14));
  box-shadow: var(--shadow-soft);
}

.portrait-frame::before {
  content: '';
  position: absolute;
  inset: 14px;
  border-radius: calc(var(--radius) + 2px);
  border: 1px solid rgba(255, 255, 255, 0.34);
  pointer-events: none;
  z-index: 1;
}

.portrait-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
}

@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 24px;
    padding-block: clamp(16px, 5vw, 32px);
  }

  .visual {
    order: -1;
  }

  .portrait-frame {
    width: min(100%, 280px);
    aspect-ratio: 4 / 5;
  }
}

@media (max-width: 640px) {
  .hero__inner {
    gap: 18px;
    padding-block: 12px 20px;
  }

  .copy h1 {
    margin: 8px 0 12px;
    font-size: clamp(28px, 9vw, 38px);
    line-height: 1.04;
  }

  .lede {
    margin-bottom: 20px;
    font-size: 15px;
  }

  .actions {
    gap: 10px;
  }

  .portrait-frame {
    width: min(100%, 220px);
    aspect-ratio: 4 / 5;
  }
}
</style>
