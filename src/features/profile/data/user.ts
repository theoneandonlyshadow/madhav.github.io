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
I'm Madhav Nair — Associate Software Engineer @ Aimver Technologies

I build shit I want to exist.

I like making things, solving hard problems (incl. the ones i create), and going way too deep into stuff that catches my interest.

Most days, I'm either building something new or wondering how the hell something works. You WILL catch me hating on Microsoft.

Still learning. Still shipping. Still breaking prod.

🤙
  `,
  avatar: "https://ik.imagekit.io/rwjhjllft/avatar.jpg",
  ogImage: "https://ik.imagekit.io/rwjhjllft/ogImage.png",
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
