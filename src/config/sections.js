// Single source of truth for section visibility.
// Flip a value to false to hide that section. No rebuild logic required.

export const sections = {
  main: {
    socialStrip: true,
    hero: true,
    about: true,
    techStack: true,
    projects: true,
    experience: true,
    certifications: true,
    blog: false,
    contact: true,
    footer: true,
  },
  personal: {
    starfield: true,
    aurora: true,
    photography: true,
    books: true,
    youtube: true,
    games: true,
    anime: true,
    music: true,
    socials: true,
  },
}
