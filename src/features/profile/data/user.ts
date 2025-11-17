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

21 y/o dev. Accidentally built something so clean IBM Research picked it up.
Now I ship production code full-time at Aimver.

What I've Done:
- Software Engineer @ Aimver (2025 - now)
- Shipped APIs and hardened user security for 5.5k+ monthly users (2021 - 2024)
- Led 20+ interns as Tech Lead (2024 - 2025)
- Freelanced for startups that actually launched
- Git game strong

Born to code. Forced to sleep.
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
