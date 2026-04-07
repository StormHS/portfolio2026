# Codex Agent Notes

Purpose: act as a running log for collaboration on the portfolio project.

- Scope: portfolio site in `index.html` and supporting assets.
- Tone: minimalist, calm, Japanese-inspired aesthetic; prioritize clarity and smooth interactions.
- Process: when a task is done, record outcomes and open questions here.

## Tasks & Status

- [ ] Set baseline typography, spacing scale, and color tokens.
- [ ] Build landing hero with intro copy and CTA.
- [ ] Add projects section with cards and hover micro-interactions.
- [ ] Add about section with photo/illustration and concise bio.
- [ ] Add contact/links footer with social icons.
- [ ] Add light motion (page load fade/slide) keeping performance lean.

## Working Notes

- Tech: Vite project (see `package.json`), entry at `index.html` with `src` assets.
- Design: embrace negative space, limited palette, subtle gradients or paper-like texture if needed, motion should be low-friction.
- Content: avoid placeholder lorem; keep copy short and intentional.
- Hero: replaced the right-side placeholder graphic with the local `stormprofileimage.JPG` portrait treatment, and tightened the mobile hero spacing/sizing so it fits more naturally on phones.
- Skills section: added a responsive tabbed `Skills & Experience` section between projects and intro video, with structured technical, leadership, and education content and a matching header link.
- Intro section: added a dedicated centered `Intro Video` section beneath projects and linked it from the header, reusing the inline-play poster pattern for consistency.
- Color system: primary text uses `#444`, while dark surface treatments such as inverse buttons and the header mark now use a shared warm green token for consistency.
- Projects: project cards now support both YouTube demo entries and live-site entries like ParrotPad; video parsing lives in `src/data/projects.js`, while non-video projects render as direct website cards.
