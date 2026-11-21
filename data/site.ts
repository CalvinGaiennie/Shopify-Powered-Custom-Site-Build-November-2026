export const siteConfig = {
  name: "Michael Scott Boudreaux",
  tagline: "Michael Scott Boudreaux Official Website",
  copyright: "2018 All Rights Reserved | Michael Scott Boudreaux",
} as const;

export const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "SHOWS", href: "#shows" },
  { label: "BIO", href: "#bio" },
  { label: "MUSIC", href: "#music" },
  { label: "MEDIA", href: "#media" },
  { label: "MERCH", href: "#merch" },
  { label: "CONTACT", href: "#contact" },
] as const;

export type NavLink = (typeof navLinks)[number];

export const assets = {
  logo: "/images/msb-logo.png",
  heroName: "/images/msb-hero-name.png",
  heroPhoto: "/images/msb-hero.jpg",
} as const;

export const bioParagraphs = [
  "Michael Scott Boudreaux is a singer-songwriter from Breaux Bridge, Louisiana, whose music is built on storytelling, authenticity, and the rich culture of the Gulf South. Picking up his first guitar at just three years old, he developed a passion for music that has grown into a distinctive sound rooted in classic country, Texas country, Americana, Southern rock, and Louisiana traditions.",
  "Since releasing his debut EP in 2020, Boudreaux has steadily built a reputation as a compelling live performer, playing stages across the South both as a solo artist and with his full band. Whether in an intimate listening room, a dance hall, or on a festival stage, he delivers songs that connect through honest lyrics, memorable melodies, and a genuine love for his Louisiana roots.",
  "His growing catalog includes fan favorites like “I Want a Girl That Likes to Fish” and “No Drinkin’ Money,” available on all major streaming platforms. Looking ahead, MSB is releasing a new acoustic project, “Demos at Dockside” dropping on all digital streaming platforms on November 20th.",
  "With new music on the horizon and his roots firmly planted in the bayou, Michael Scott Boudreaux continues to carve his own path—one song, one story, and one stage at a time.",
] as const;

export const spotifyEmbeds = [
  {
    title: "Burnin' Bridges",
    caption: "Listen to “Burnin’ Bridges” on Spotify!",
    embedPath: "track/4lQwGV1iKuZSkFP5JfZW3R",
    height: 232,
  },
  {
    title: "No Drinkin' Money",
    caption: "Listen to “No Drinkin’ Money” on Spotify!",
    embedPath: "track/6p6p1hj6ua8AIJ8C8Fo5sc",
    height: 232,
  },
  {
    title: "I Want a Girl That Likes to Fish",
    caption: "Listen to “I Want a Girl That Likes to Fish” on Spotify!",
    embedPath: "track/1vKnsOIVqdKKZmuJwRD5vq",
    height: 232,
  },
  {
    title: "Acadiana",
    caption: "Listen to the “Acadiana” album on Spotify!",
    embedPath: "album/61qkHWoUinEzvg9GS5h4Zs",
    height: 472,
  },
] as const;

export const socialLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/1Au2JLu0oDx2bgszgduIqF?si=ZPXnJu01Sgqmn9CQm-MkMA",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/michaelscottboudreaux",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@michaelscottboudreaux",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCA8yRIDebIpu9p6Icp_35Rw",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/michaelscottboudreaux/",
  },
  {
    label: "Bandsintown",
    href: "https://bnds.us/ak4fgu",
  },
] as const;

export const bandsintownUrl = "https://bnds.us/ak4fgu";