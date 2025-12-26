import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "netprobe",
    title: "NetProbe Mk.II",
    period: {
      start: "04.2024",
    },
    link: "https://github.com/theoneandonlyshadow/NetProbe",
    skills: [
      "Open Source",
      "JavaScript",
      "pnpm-workspace",
      "Package Publishing",
      "System Tray App",
    ],
    description: `NetProbe Mk.2 is a system tray application that monitors internet connectivity, logs connection status changes, and provides utility features like clearing DNS cache and viewing logs. Built using Node.js, it is designed to work seamlessly on Windows, macOS, and Linux.
`,
    logo: "https://ik.imagekit.io/rwjhjllft/netprobe?updatedAt=1762453472197",
    isExpanded: true,
  },
  {
    id: "stackon",
    title: "Stackon Innovations",
    period: {
      start: "11.2025",
    },
    link: "https://stackon.in",
    skills: [
      "Design & Development",
      "Three.js 3D Website Development",
      "Next.js Website Development",
      "Single Page Application",
      "Content Management System",
    ],
    description: `Stackon Innovations is a freelancing startup founded by Nygil Benny. He designed the main website, I developed it and gave it life. I manage CI/CD, Core development, Databases and Hosting for clients that reach out to us. We have taken 3D SPA, Application Development, CMS, Static based and many more clients as of now.
`,
    logo: "https://ik.imagekit.io/stackon/Stackon/common/logo.ico",
    isExpanded: true,
  },
  {
    id: "vermilion",
    title: "Vermilion AI",
    period: {
      start: "01.2025",
    },
    link: "",
    skills: ["Open Source", "AI"],
    description: `Vermilion is an Artificial Intelligence that automates tasks under your OS. Vermilion is used just like any other AI all the while having unrestricted data.

**Featured:**

- Finetuned Deepseek R1 Model with Cronen dataset.
- Light/Dark themes
- JavaFX UI
- Python Tensorflow optimized
- AI-ready with XS1 Command Innjection
- Task Automation Workflow
- ≥ 95% XS1 Accuracy.
- ≤ 1.2 seconds Model Inference Time.
- ≤ 500MB RAM, ≤ 15% CPU on idle
- ≤ 1GB, ≤ 35% CPU under load
- ≤ 2% XS1 Cmd Injection Error Rate
`,
    logo: "https://ik.imagekit.io/rwjhjllft/vermilion?updatedAt=1762453539995",
  },
  {
    id: "usasiaaeroservices",
    title: "US Asian Aeroservices [in dev]",
    period: {
      start: "10.2025",
    },
    link: "https://usasianaeroservices.pages.dev",
    skills: ["Freelance"],
    description: `Cutting edge UI made with Launch UI, ShadCN and Aceternity UI. Made it for a friend. Development kept on hold due to inadequate drone data.
- Showcases military grade drones.`,
    logo: "https://ik.imagekit.io/rwjhjllft/usasianaeroservices?updatedAt=1762454558266",
  },
  {
    id: "xpr",
    title: "Express Relay [ALPHA]",
    period: {
      start: "11.2024",
    },
    link: "https://xpr.pages.dev",
    skills: [
      "University Project",
      "Next.js",
      "MongoDB",
      "ShadCN",
      "Docker",
      "Tailwind CSS",
      "FOSS by MaxTac",
      "Cloudflare D1",
      "Cloudflare R2",
    ],
    description: `- Upload. Share. Download with no ads and free storage.
- Made with Next.js, MongoDB, ShadCN, Tailwind CSS, Cloudflare D1, Cloudflare R2 and Docker.
- Workflow:
  - Frontend:
    - User enteres website.
    - User selects files to upload (Unlimited files but 7Gb per upload).
    - User clicks upload.
  - Backend (<1.5s response):
    - Fetches cache that was computed from last user upload. This cache data stores all available storage of all clusters.
    - The highest storage cluster is selected for upload.
    - Metadata of the files such as name, size, upload date and time are fetched.
    -  This metadata is stored in Cloudflare D1.
    - Files are stored in this storage cluster.
    - In case of failure to upload to any of available storage clusters, we upload these files into Cloudflare R2.
  - Frontend:
    - User is redirected to success page.
    - Displays the 6 digit alpha numeric code and option to delete the uploaded files.
    - User can choose to share this code to anyone to download the same files.
    - User is presented with XPR-WSS (a window below this success page) to initiate communication with the ones this short code was shared to (Max 20 users allowed).
    - Deleting the uploaded files will invalidate this chat session.
    - In any case, 7 days after an upload, these files and their collected metadata are automatically deleted from the storage clusters.
- Other features:
  - History tab: Users can check their upload history that shows the amount of files, size, date, time, download link, shortcode and delete files.
  - MaxTac tab: Users can check out our extended FOSS products.
`,
  },
  {
    id: "rd",
    title: "Relay Driver [in dev]",
    period: {
      start: "11.2025",
    },
    link: "https://github.com/theoneandonlyshadow/RelayDriver",
    skills: [
      "FOSS By MaxTac",
      "Rust",
      "Cloudflare D2",
      "Cloudflare R1",
      "Docker",
      "egui",
    ],
    description: `- Upload. Share. Download at warp speed right in your desktop.
- Made with egui, Rust and Cloudflare.
- Features:
  - 4 main features: Upload, Receive, History and Right Click to Upload.
  - Other than that, the user is presented with Upload, Receive, History, Logs, Right Click to Upload, Recent Activity, System Info, Donate, Update, Quit.    - Upload: upon clicking, a native file explorer is opened to choose files to upload.
  - Receive: upon clicking, a window opens prompting a 6 digit alpha numeric code to download intended files.
  - History: upon clicking, a window opens showing all your upload and receive history with detailed report.
  - Logs: upon clicking, a window opens showing all your history made within this Relay Driver application (Locally stored. Not collected or backed up).
  - Right Click to Upload: enabling this registers an option to upload directly to XPR Cloud inside your file explorer options for ease of upload. Simply right click on a file and click on Show More Options and find "Upload to XPR Cloud".   - Recent Activity: shows your recent 7 recent uploads.
  - System Info: displays system info.
  - Donate: gimme money.
  - Update: checks for app update. Disabled by default. Checks for update at app startup.
  - Quit: quits the app completely. Disabled when a process is running.
      `,
  },
  /*
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    period: {
      start: "01.2017",
      end: "08.2018",
    },
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
      "jQuery",
      "Bootstrap 3",
    ],
    description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — National Young Informatics Contest 2018
- 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
- 3rd Prize — Can Tho City Young Informatics Contest 2018
- Reached 7k+ users, mainly high school students in Can Tho City
- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training`,
    logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp",
  },
  {
    id: "dmessage",
    title: "DMessage",
    period: {
      start: "05.2017",
      end: "05.2017",
    },
    link: "https://github.com/ncdai/DMessage",
    skills: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    period: {
      start: "11.2016",
      end: "12.2017",
    },
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    skills: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
- Consolation Prize — National Youth and Children's Creativity Contest 2016
- 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
- Consolation Prize — Can Tho City Young Informatics Contest 2016`,
  },
  */
];
