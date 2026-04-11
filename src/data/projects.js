const rawProjects = [
  {
    id: 0,
    title: 'ParrotPad',
    siteUrl: 'https://www.parrotpad.app/',
    description:
      'Current project. Co-founded this language rehearsal tool focused on building real-life speaking confidence. I designed and built the company website in Vue 3, shape the product direction, and work across UX, feature planning, and product delivery.',
  },
  {
    id: 1,
    title: 'Paw Print Petition',
    video: 'https://www.youtube.com/embed/KgxpTjTQ06A?si=CMtR8b8JrzKwCOax',
    description:
      'Vue 3 / Nuxt 3 / Firebase petition platform where users "sign" with their pet’s paw to ban public fireworks. I contributed heavily to frontend development as well as working on the API integration and testing Firebase functions. Reached 100,000+ signatures submitted to parliament.',
  },
  {
    id: 2,
    title: 'Fruju Frenzy',
    video: 'https://www.youtube.com/embed/v4j6kG1ys9c?si=8K1lO75HPuaDh8ZX',
    description:
      'Vue 3 / Nuxt 3 / Matter.js interactive browser game where users tap falling fruit for points. I built gameplay features, physics interactions, and UI using Matter.js, focusing on smooth animation and responsive feedback.',
  },
  {
    id: 3,
    title: 'Cadbury Unwrap the Thrill',
    video: 'https://www.youtube.com/embed/BcD08RJL3XA?si=Eh_e1j4b2rsGcJVa',
    description:
      'Vue 3 / Nuxt 3 / Firebase promotional campaign where users enter product codes for a chance to win. I built the frontend and developed reusable components, including the entry flow and form validation.',
  },
]

const getYoutubeVideoId = (videoUrl) => {
  try {
    const url = new URL(videoUrl)
    const segments = url.pathname.split('/').filter(Boolean)

    if (url.hostname.includes('youtu.be')) {
      return segments[0] ?? ''
    }

    if (url.searchParams.has('v')) {
      return url.searchParams.get('v') ?? ''
    }

    const embedIndex = segments.findIndex((segment) => segment === 'embed')

    if (embedIndex !== -1) {
      return segments[embedIndex + 1] ?? ''
    }

    return segments.at(-1) ?? ''
  } catch {
    return ''
  }
}

const buildYoutubeWatchUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`

const buildYoutubeThumbnailUrl = (videoId) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

const buildYoutubeEmbedUrl = (videoId, options = {}) => {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    ...options,
  })

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

export const projects = rawProjects.map((project) => {
  if (!project.video) {
    return {
      ...project,
      type: 'site',
      siteLabel: 'Visit site',
    }
  }

  const videoId = getYoutubeVideoId(project.video)

  return {
    ...project,
    type: 'video',
    videoId,
    embedUrl: buildYoutubeEmbedUrl(videoId),
    autoplayEmbedUrl: buildYoutubeEmbedUrl(videoId, { autoplay: '1' }),
    watchUrl: buildYoutubeWatchUrl(videoId),
    thumbnail: buildYoutubeThumbnailUrl(videoId),
  }
})
