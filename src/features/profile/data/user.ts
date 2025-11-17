import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Madhav",
  lastName: "Nair",
  displayName: "Madhav Nair",
  username: "theoneandonlyshadow",
  gender: "male",
  pronouns: "he/him",
  bio: "Deploying Dreams",
  flipSentences: [
    "Breaking Prod",
    "Associate Software Engineer",
    "Sending Memes",
    "Deploying Dreams",
    "Eating Donuts",
  ],
  address: "Kochi, Kerala, India",
  phoneNumber: "KzkxIDg1NDc3NTgyMDI=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bWFkaGF2bmFpcjcwMEBnbWFpbC5jb20=", // base64 encoded
  website: "https://madhavn.com",
  jobTitle: "Associate Software Engineer",
  jobs: [
    {
      title: "Associate Software Engineer",
      company: "Aimver",
      website: "https://aimver.com",
    },
  ],
  about: `
I'm Madhav Nair — Associate Software Engineer @ Aimver

I build full-stack products across TypeScript, Next.js, PostgreSQL, and cloud that stay fast no matter how hard you push them.
The stuff I ship ends up in real user's hands, so polish and stability actually matter.
From UI craft to infra wiring, I keep the entire stack tight.
I built internal tools, backend services, and my own projects since 11th grade.
I have worked under pressure so deadlines don’t scare me.
Production quality is the bar, not the goal.

Drop a hi in my email. I respond quick.
  `,
  avatar: "https://ik.imagekit.io/rwjhjllft/madhav.jpg?updatedAt=1762443850444",
  ogImage:
    "https://ik.imagekit.io/rwjhjllft/madhav.jpg?updatedAt=1762443850444",
  keywords: [
    "madhav",
    "madhav nair",
    "madhav m nair",
    "maxtac",
    "madhav maxtac",
    "aimver",
    "aimver technologies",
    "theoneandonlyshadow",
    "madhav theoneandonlyshadow",
    "theoneandonlyshadow maxtac",
  ],
  dateCreated: "2025-11-06", // YYYY-MM-DD
};
