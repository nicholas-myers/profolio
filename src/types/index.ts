export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type SocialLink = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "email" | "twitter";
};

export type SiteConfig = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  about: string[];
  email: string;
  location?: string;
  socialLinks: SocialLink[];
};
