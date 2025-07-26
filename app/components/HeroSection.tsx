import React from "react";
import { GitHub, LinkedIn, HackerRank, LeetCode, HackTheBox } from "./Icons";
import {
  Nodejs,
  TypeScript,
  PostgreSQL,
  KaliLinux,
  Docker,
  MongoDB,
  JavaScript,
  HTML,
  CSS,
  EJS,
  Expressjs,
} from "./Services";
import { LinkPreview } from "@/app/components/ui/link-preview";
import { ContainerTextFlip } from "@/app/components/ui/text-flip";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20">
        <div className="grid-overlay animate-pulse-slow"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: <Nodejs />, delay: "0s", position: "top-20 left-1/4" },
          { icon: <TypeScript />, delay: "2s", position: "top-40 right-1/3" },
          { icon: <PostgreSQL />, delay: "1s", position: "bottom-32 left-1/3" },
          { icon: <KaliLinux />, delay: "3s", position: "bottom-40 right-1/4" },
          { icon: <Docker />, delay: "3s", position: "top-20 right-1/2" },
          { icon: <MongoDB />, delay: "3s", position: "top-30 right-2/4" },
          { icon: <JavaScript />, delay: "3s", position: "top-40 right-3/4" },
          { icon: <HTML />, delay: "3s", position: "bottom-20 right-3/4" },
          { icon: <CSS />, delay: "3s", position: "top-20 right-1/4" },
          { icon: <EJS />, delay: "3s", position: "bottom-5 left-2/4" },
          { icon: <Expressjs />, delay: "3s", position: "bottom-10 right-1/4" },
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-50`}
            style={{ animationDelay: item.delay }}
          >
            <span className="text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="relative inline-block px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-700 via-cyan-700 to-cyan-700 rounded-2xl blur-xl opacity-75"></div>
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
              Madhav Nair
            </h1>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                <h2 className="text-xl sm:text-2xl font-light flex items-center tracking-wide text-blue-400">
                  <ContainerTextFlip
                    words={[
                      "Associate SDE @",
                      "Breaking Prod @",
                      "Eating Donuts @",
                      "Deploying dreams @",
                    ]}
                  />
                  <span className="text-blue-700">
                    <LinkPreview
                      url="https://aimver.com"
                      className="text-blue-700"
                    >
                      Aimver
                    </LinkPreview>
                  </span>
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
                FOSS For Life⚡
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
              {[
                "Node.js",
                "TypeScript",
                "Express.js",
                "Docker",
                "PostgreSQL",
                "MongoDB",
                "JavaScript ESM/CJS",
                "Socket.IO",
                "HTML/CSS",
                "REST API",
                "CRUD Operations",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
            <a
              href="https://github.com/theoneandonlyshadow"
              className="group relative inline-flex items-center justify-center"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/theoneandonlyshadow/"
              className="group relative inline-flex items-center justify-center"
            >
              <LinkedIn />
            </a>
            <a
              href="https://www.hackerrank.com/profile/madhavnair495"
              className="group relative inline-flex items-center justify-center"
            >
              <HackerRank />
            </a>
            <a
              href="https://leetcode.com/u/theoneandonlyshadow/"
              className="group relative inline-flex items-center justify-center"
            >
              <LeetCode />
            </a>
            <a
              href="https://app.hackthebox.com/profile/1991144"
              className="group relative inline-flex items-center justify-center"
            >
              <HackTheBox />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2 text-center">
          See what else I got
        </span>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};