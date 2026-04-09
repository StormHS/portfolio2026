<script setup>
import { ref } from 'vue'

const tabs = [
  {
    id: 'technical-experience',
    label: 'Technical Experience',
    groups: [
      {
        heading: 'Fullstack Developer Internship · PixelWorld (Aug 2024 - Aug 2025)',
        items: [
          'Developed responsive national and international web campaigns using Vue 3, Nuxt, Tailwind, and SCSS.',
          'Built reusable Vue components and implemented pixel-accurate designs from Figma.',
          'Integrated animations and interactive elements using Lottie and Matter.js.',
          'Collaborated with designers and developers to deliver production-ready campaigns.',
        ],
      },
      {
        heading: 'Product and Operations Management · ParrotPad App (Apr 2025 - Current)',
        items: [
          'Built and maintained the company website.',
          'Developed frontend application features and coordinated the product roadmap.',
          'Collaborated with backend developers on architecture decisions.',
          'Used AI-assisted tools like Codex to accelerate implementation and problem solving.',
        ],
      },
    ],
  },
  {
    id: 'technical-skills',
    label: 'Technical Skills',
    groups: [
      {
        heading: 'Languages & Frameworks',
        items: ['JavaScript', 'Vue 3', 'Nuxt', 'HTML', 'SCSS', 'Tailwind CSS'],
      },
      {
        heading: 'Libraries & Tools',
        items: ['Matter.js', 'Lottie', 'Firebase'],
      },
      {
        heading: 'Development Workflow',
        items: ['Git', 'npm', 'Browser DevTools', 'Codex', 'LLM-assisted debugging'],
      },
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    groups: [
      {
        heading: 'National Manager of Support Services · Rainbow Youth (Feb 2021 - Mar 2023)',
        items: [
          'Directed national service delivery across five regions.',
          'Acted as an executive liaison between frontline services, government stakeholders, and executive leadership.',
          'Designed and implemented operational systems to standardise service delivery at scale.',
        ],
      },
      {
        heading:
          'Community Participation & Covid-19 Response Lead · Northable (Nov 2018 - Feb 2021)',
        items: [
          'Developed online services and digital resources during lockdowns.',
          'Built client databases and advertising strategies to launch a youth mentoring service.',
        ],
      },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    groups: [
      {
        heading: 'Tertiary Education',
        items: [
          'Dev Academy · Certificate in Applied Software Development (2023)',
          'Bachelor of Social Work (2015-2017)',
          'Certificate in Mental Health and Addictions (2014)',
        ],
      },
    ],
  },
  {
    id: 'other-trainings',
    label: 'Other Trainings',
    groups: [
      {
        heading: 'Other Trainings',
        items: [
          '#I Am Remarkable (2026)',
          'ASIST Suicide Prevention Training (2022)',
          'Puawaitahi Sexual Harm Training (2022)',
          'Te Tiriti and Cultural Safety Training (2022)',
          'BE Accessible Accessibility Training (2021)',
          'Sign Language 3-month course (2020)',
          'Gender and Sexuality 101 training (2020)',
        ],
      },
    ],
  },
]

const activeTabId = ref(tabs[0].id)

const isActiveTab = (tabId) => activeTabId.value === tabId

const setActiveTab = (tabId) => {
  activeTabId.value = tabId
}
</script>

<template>
  <section id="skills-experience" class="section skills-experience">
    <div class="shell skills-experience__inner">
      <div class="skills-experience__header">
        <div class="eyebrow">About Me</div>
        <p class="lede">
          Tena koe, I am a junior Full Stack Developer with comprehensive training in current
          development tools and 8 years experience in the not-for-profit sector including 3 years
          managing remote teams. I'm a curious, detailed oriented and self-directed person and after
          finishing a 1 year internship and starting my own company I am looking for an exciting new
          opportunity as a dev.
        </p>
      </div>

      <div class="tabs" role="tablist" aria-label="Skills and experience sections">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab"
          :class="{ 'tab--active': isActiveTab(tab.id) }"
          type="button"
          role="tab"
          :aria-selected="isActiveTab(tab.id)"
          :aria-controls="`panel-${tab.id}`"
          @click="setActiveTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>

      <section
        v-for="tab in tabs"
        v-show="isActiveTab(tab.id)"
        :id="`panel-${tab.id}`"
        :key="tab.id"
        class="panel"
        role="tabpanel"
        :aria-labelledby="tab.id"
      >
        <div
          class="panel__content"
          :class="{ 'panel__content--skills': tab.id === 'technical-skills' }"
        >
          <article v-for="group in tab.groups" :key="group.heading" class="group">
            <h4>{{ group.heading }}</h4>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.skills-experience {
  padding-top: clamp(8px, 2vw, 20px);
}

.skills-experience__inner {
  width: 100%;
}

.skills-experience__inner > * + * {
  margin-top: clamp(16px, 3vw, 24px);
}

.skills-experience__header {
  width: 100%;
}

.lede {
  margin: 10px 0 0;
  color: var(--muted);
  font-size: clamp(15px, 2vw, 17px);
  max-width: 980px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
}

.tab {
  width: 100%;
  border: 1px solid var(--lines);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  color: var(--muted);
  padding: 10px 16px;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 200ms var(--ease),
    border-color 200ms var(--ease),
    color 200ms var(--ease),
    transform 200ms var(--ease);
}

.tab:hover,
.tab:focus-visible {
  border-color: color-mix(in srgb, var(--accent) 34%, var(--lines));
  color: var(--ink);
  transform: translateY(-1px);
  outline: none;
}

.tab--active {
  background: var(--surface-dark);
  border-color: var(--surface-dark);
  color: var(--paper);
}

.panel {
  border: 1px solid var(--lines);
  border-radius: calc(var(--radius) + 4px);
  background: rgba(255, 255, 255, 0.64);
  backdrop-filter: blur(4px);
  box-shadow: var(--shadow-soft);
  padding: clamp(18px, 4vw, 30px);
  width: 100%;
}

.panel__content {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.panel__content--skills {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: start;
}

.group {
  padding-bottom: 18px;
  border-bottom: 1px solid color-mix(in srgb, var(--surface-dark) 10%, var(--lines));
}

.panel__content--skills .group {
  padding-bottom: 0;
  border-bottom: 0;
}

.group:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.group h4 {
  margin: 0 0 12px;
  font-size: 15px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--surface-dark);
}

.group ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.group li {
  position: relative;
  padding-left: 18px;
  color: var(--ink);
}

.group li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.72em;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 55%, var(--surface-dark));
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--accent) 10%, transparent);
  transform: translateY(-50%);
}

@media (max-width: 900px) {
  .tabs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .panel__content--skills {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
}

@media (max-width: 640px) {
  .skills-experience__inner > * + * {
    margin-top: 14px;
  }

  .lede {
    margin-top: 8px;
    font-size: 15px;
  }

  .panel {
    padding: 16px;
  }

  .panel__content {
    gap: 16px;
  }

  .panel__content--skills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px 12px;
  }

  .group {
    padding-bottom: 14px;
  }

  .panel__content--skills .group h4 {
    margin-bottom: 10px;
    font-size: 13px;
  }

  .panel__content--skills .group ul {
    gap: 8px;
  }

  .panel__content--skills .group li {
    padding-left: 14px;
    font-size: 14px;
  }

  .panel__content--skills .group li::before {
    width: 6px;
    height: 6px;
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 8%, transparent);
  }

  .tabs {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }

  .tab {
    min-height: 44px;
    padding: 10px 12px;
    font-size: 14px;
  }
}
</style>
