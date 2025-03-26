// next.config.ts
import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching: [
      {
        urlPattern: /\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static-assets",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
          }
        }
      },
      {
        urlPattern: /\/_next\/image\?url=.+/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "next-images",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
          }
        }
      },
      {
        urlPattern: /\.(?:js|css|tsx|ts)$/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "static-components",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 365 * 24 * 60 * 60 // 1 year
          }
        }
      },
      {
        urlPattern: /.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "others",
          networkTimeoutSeconds: 10,
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 24 * 60 * 60 // 24 hours
          }
        }
      }
    ]
  }
});

export default nextConfig;