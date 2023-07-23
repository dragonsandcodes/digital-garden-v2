import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  process.env.VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Fanni Friedrich",
  handle: "@dragonsandcodes",
  socialProfiles,
  email: "fanni@dragonsandcodes.com",
  website: "https://dragonsandcodes.com",
  jobTitle: "Wannabe (game) developer, Content Creator",
  //company: "Unicorns & Co.",
  availableForWork: true,
  location: {
    city: "Barcelona",
    media: "/barcelona.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Learning to code, because hot girls have quarter-life crisis.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/thedevdavid/digital-garden",
  analyticsProvider: "umami",
};

export default siteMetadata;
