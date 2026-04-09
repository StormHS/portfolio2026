<script setup>
import { ref } from 'vue'

const introVideoId = 'unxiejUWMH8'
const introThumbnail = `https://i.ytimg.com/vi/${introVideoId}/hqdefault.jpg`
const introEmbedUrl = `https://www.youtube.com/embed/${introVideoId}?autoplay=1&modestbranding=1&playsinline=1&rel=0`

const isPlaying = ref(false)

const playIntro = () => {
  isPlaying.value = true
}
</script>

<template>
  <section id="intro-video" class="section intro-video">
    <div class="shell intro-video__inner">
      <div class="intro-video__header">
        <div class="eyebrow">Intro Video</div>
        <h2>A quick introduction before the deeper project work.</h2>
      </div>

      <div class="intro-video__stage">
        <div class="intro-video__frame">
          <iframe
            v-if="isPlaying"
            class="intro-video__player"
            title="Intro video player"
            :src="introEmbedUrl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            loading="lazy"
          />
          <button
            v-else
            class="intro-video__poster"
            type="button"
            aria-label="Play intro video in page"
            @click="playIntro"
          >
            <img
              class="intro-video__image"
              :src="introThumbnail"
              alt="Intro video cover image"
              loading="lazy"
            />
            <span class="intro-video__badge">Play intro</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-video {
  padding-top: clamp(8px, 2vw, 18px);
}

.intro-video__inner {
  display: flex;
  flex-direction: column;
  gap: clamp(22px, 4vw, 32px);
}

.intro-video__header {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
}

.intro-video__header h2 {
  margin: 10px 0 14px;
  font-family: var(--font-head);
  font-size: clamp(28px, 4.6vw, 42px);
  letter-spacing: 0.4px;
}

.lede {
  margin: 0;
  color: var(--muted);
}

.intro-video__stage {
  display: flex;
  justify-content: center;
}

.intro-video__frame {
  width: min(100%, 920px);
  aspect-ratio: 16 / 9;
  position: relative;
  overflow: hidden;
  border-radius: calc(var(--radius) + 8px);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, var(--lines));
  background:
    radial-gradient(
      circle at top right,
      color-mix(in srgb, var(--accent) 26%, transparent),
      transparent 40%
    ),
    linear-gradient(180deg, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.18));
  box-shadow: var(--shadow-soft);
}

.intro-video__frame::before {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: calc(var(--radius) + 1px);
  border: 1px solid rgba(255, 255, 255, 0.34);
  pointer-events: none;
  z-index: 2;
}

.intro-video__poster {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 0;
  padding: 0;
  cursor: pointer;
  background: transparent;
}

.intro-video__player {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
}

.intro-video__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition:
    transform 260ms var(--ease),
    filter 260ms var(--ease);
}

.intro-video__poster::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.08) 0%, rgba(15, 23, 42, 0.42) 100%);
}

.intro-video__poster:hover .intro-video__image,
.intro-video__poster:focus-visible .intro-video__image {
  transform: scale(1.02);
  filter: saturate(1.04);
}

.intro-video__poster:focus-visible {
  outline: 2px solid color-mix(in srgb, var(--accent) 70%, white);
  outline-offset: -4px;
}

.intro-video__badge {
  position: absolute;
  left: 22px;
  bottom: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--ink);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.18);
}

.intro-video__badge::before {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 76%, var(--ink));
  box-shadow: 0 0 0 7px color-mix(in srgb, var(--accent) 16%, transparent);
}

@media (max-width: 640px) {
  .intro-video__badge {
    left: 14px;
    right: 14px;
    bottom: 14px;
    justify-content: center;
  }
}
</style>
