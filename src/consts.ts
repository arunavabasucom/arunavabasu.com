import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "arunavabasu.com",
  DESCRIPTION: "Welcome to arunavabasu.com.",
  AUTHOR: "Arunava Basu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "arunavabasucom",
    HREF: "https://github.com/arunavabasucom",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "arunavabasucom",
    HREF: "https://www.linkedin.com/in/arunavabasucom",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "arunavabasucom",
    HREF: "https://x.com/arunavabasucom",
  },
  {
    NAME: "Resume",
    ICON: "doc",
    TEXT: "links.arunavabasu.com/resume",
    HREF: "https://links.arunavabasu.com/resume",
  },
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "arunava.basu@arunavabasu.com",
    HREF: "mailto:arunava.basu@arunavabasu.com",
  }
];

