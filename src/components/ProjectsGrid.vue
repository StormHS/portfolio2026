<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects'

const playingIds = ref(new Set())

const isPlaying = (id) => playingIds.value.has(id)

const playVideo = (id) => {
  const nextPlayingIds = new Set(playingIds.value)
  nextPlayingIds.add(id)
  playingIds.value = nextPlayingIds
}
</script>

<template>
  <section id="projects" class="section projects">
    <div class="shell">
      <div class="header">
        <div class="eyebrow">Projects</div>
        <h2>My Favourite Projects and Campaigns.</h2>
        <p class="lede">
          A mix of some of the projects and campaigns I've worked on. Each with a short demo video
          or link.
        </p>
      </div>

      <div class="grid">
        <article v-for="project in projects" :key="project.id" class="card">
          <div class="media" :class="{ 'media--site': project.type === 'site' }">
            <a
              v-if="project.type === 'site'"
              class="media__site-link"
              :href="project.siteUrl"
              target="_blank"
              rel="noreferrer"
              :aria-label="`Open ${project.title} website`"
            >
              <div class="media__site-copy">
                <span class="media__eyebrow">Current project</span>
                <strong>{{ project.title }}</strong>
                <span class="media__url">{{ project.siteUrl.replace(/^https?:\/\//, '') }}</span>
              </div>
              <span class="media__badge">Open site</span>
            </a>
            <iframe
              v-else-if="isPlaying(project.id)"
              class="media__player"
              :title="`${project.title} demo video player`"
              :src="project.autoplayEmbedUrl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            />
            <button
              v-else
              class="media__link"
              type="button"
              :aria-label="`Play ${project.title} demo in page`"
              @click="playVideo(project.id)"
            >
              <img
                class="media__image"
                :src="project.thumbnail"
                :alt="`${project.title} demo cover image`"
                loading="lazy"
              />
              <span class="media__badge">Play demo</span>
            </button>
          </div>

          <div class="card__body">
            <div class="card__title-row">
              <h3>{{ project.title }}</h3>
              <span class="pill">Vue / Nuxt</span>
            </div>
            <p class="description">{{ project.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding-top: clamp(12px, 3vw, 24px);
}

.header h2 {
  font-family: var(--font-head);
  font-size: clamp(26px, 4.4vw, 40px);
  letter-spacing: 0.4px;
  margin: 10px 0 14px;
}

.lede {
  max-width: 680px;
  color: var(--muted);
  margin: 0 0 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(14px, 3vw, 22px);
}

.card {
  border: 1px solid var(--lines);
  border-radius: var(--radius);
  background: #ffffffc4;
  backdrop-filter: blur(4px);
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 220ms var(--ease),
    box-shadow 220ms var(--ease),
    border-color 220ms var(--ease);
}

.card:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 30%, var(--lines));
  box-shadow: var(--shadow-soft);
}

.media {
  aspect-ratio: 16 / 9;
  position: relative;
  background:
    linear-gradient(180deg, transparent 0%, rgba(15, 23, 42, 0.16) 100%),
    color-mix(in srgb, var(--accent) 10%, #0f172a);
  border-bottom: 1px solid var(--lines);
}

.media--site {
  background:
    radial-gradient(circle at top right, rgba(65, 84, 73, 0.18), transparent 38%),
    linear-gradient(160deg, rgba(65, 84, 73, 0.94), rgba(46, 60, 52, 0.98));
}

.media__link {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
  text-align: inherit;
}

.media__site-link {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;
  color: var(--paper);
}

.media__site-copy {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 80%;
}

.media__eyebrow {
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(247, 245, 240, 0.72);
}

.media__site-copy strong {
  font-family: var(--font-head);
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 600;
  line-height: 1;
}

.media__url {
  color: rgba(247, 245, 240, 0.84);
  font-size: 14px;
  word-break: break-word;
}

.media__player {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.media__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition:
    transform 260ms var(--ease),
    filter 260ms var(--ease);
}

.media__link::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.04) 0%, rgba(15, 23, 42, 0.32) 100%);
}

.media__link:hover .media__image,
.media__link:focus-visible .media__image {
  transform: scale(1.03);
  filter: saturate(1.05);
}

.media__badge {
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  font-size: 13px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.14);
}

.media__badge::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 72%, var(--ink));
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 16%, transparent);
}

.media__link:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--accent) 70%, white);
  outline-offset: -4px;
}

.media__site-link:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.86);
  outline-offset: -4px;
}

.card__body {
  padding: 14px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card__title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.card h3 {
  margin: 0;
  font-size: 18px;
  letter-spacing: 0.2px;
}

.pill {
  font-size: 11px;
  letter-spacing: 0.08em;
  padding: 5px 9px;
  border-radius: 999px;
  border: 1px solid var(--lines);
  color: var(--muted);
}

.description {
  margin: 0;
  color: var(--muted);
}

@media (max-width: 540px) {
  .card__title-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .media__badge {
    left: 12px;
    right: 12px;
    bottom: 12px;
    justify-content: center;
  }

  .media__site-copy {
    max-width: 100%;
  }
}
</style>
