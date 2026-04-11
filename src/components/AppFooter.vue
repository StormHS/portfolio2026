<script setup>
import cvPdf from '../assets/Developer - Storm Cv 2026 (2).pdf'
</script>

<template>
  <footer id="contact" class="footer">
    <div class="shell footer__inner">
      <div>
        <div class="eyebrow">Contact</div>
        <h3>Feel free to reach out.</h3>
        <div class="contact-line">
          <a class="contact-link" href="mailto:storm.harris.studdart@gmail.com">
            📧 storm.harris.studdart@gmail.com
          </a>
          <a class="contact-link" href="tel:0226166313">📞 022 616 6313</a>
        </div>
      </div>
      <div class="actions">
        <a class="btn secondary" :href="cvPdf" download="Storm-Studdart-CV-2026.pdf">
          Download CV
        </a>
        <div class="links">
          <a class="text-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer"
            >LinkedIn</a
          >
          <a class="text-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </div>
    <div class="shell meta">
      <span>© {{ new Date().getFullYear() }} Storm Studdart</span>
      <span>Portfolio 2026</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--lines);
  padding: clamp(28px, 6vw, 64px) clamp(16px, 5vw, 24px) clamp(24px, 4vw, 40px);
  background: color-mix(in srgb, var(--paper) 92%, white);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  padding-bottom: 16px;
  flex-wrap: wrap;
}

.footer h3 {
  font-family: var(--font-head);
  font-size: clamp(22px, 3.4vw, 30px);
  margin: 10px 0;
}

.actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.contact-line {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 6px;
}

.contact-link {
  color: var(--ink);
  font-weight: 500;
  transition: color 180ms var(--ease);
}

.contact-link:hover,
.contact-link:focus-visible {
  color: var(--surface-dark);
  outline: none;
}

.links {
  display: inline-flex;
  gap: 12px;
}

.meta {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--lines);
  color: var(--muted);
  font-size: 14px;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-line {
    width: 100%;
  }

  .meta {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
