<template>
  <footer id="contact" class="footer">
    <div class="shell footer__inner">
      <div>
        <div class="eyebrow">Contact</div>
        <h3>Let’s build something calm and considered.</h3>
        <p class="lede">
          Available for collaborations, product work, and creative campaigns. Reach out and we’ll
          shape the next idea together.
        </p>
      </div>
      <div class="actions">
        <a class="btn secondary" href="mailto:you@example.com">Email me</a>
        <div class="links">
          <a class="text-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer"
            >LinkedIn</a
          >
          <a class="text-link" href="https://github.com" target="_blank" rel="noreferrer"
            >GitHub</a
          >
        </div>
      </div>
    </div>
    <div class="shell meta">
      <span>© {{ new Date().getFullYear() }} Storm Harris-Studdart</span>
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

.footer .lede {
  margin: 0;
  max-width: 520px;
  color: var(--muted);
}

.actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
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

  .meta {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
