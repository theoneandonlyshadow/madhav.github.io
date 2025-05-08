import nextPWA from "next-pwa";

// Define a generic type for the config to avoid specific type conflicts
type PWAConfig = {
  dest: string;
  register: boolean;
  skipWaiting: boolean;
  disable: boolean;
  runtimeCaching: Array<{
    urlPattern: RegExp;
    handler: string;
    options: {
      cacheName: string;
      expiration: {
        maxEntries: number;
        maxAgeSeconds: number;
      };
      matchOptions?: {
        ignoreSearch: boolean;
      };
      networkTimeoutSeconds?: number;
    };
  }>;
};

// Initialize next-pwa with configuration
const pwaConfig: PWAConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /\/_next\/static\/(?!.*?[.]json$).*/i,
      handler: "CacheFirst",
      options: {
        cacheName: "next-static",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 365 * 24 * 60 * 60
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
          maxAgeSeconds: 30 * 24 * 60 * 60
        }
      }
    },
    {
      urlPattern: /\.(?:pdf|ico|svg|jpg|jpeg|png|webp|avif|woff2?)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 365 * 24 * 60 * 60
        }
      }
    },
    {
      urlPattern: /\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "others",
        networkTimeoutSeconds: 10,
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60
        },
        matchOptions: {
          ignoreSearch: true
        }
      }
    }
  ]
};

const withPWA = nextPWA(pwaConfig);

// Create the config object with our own type
interface NextJSConfig {
  reactStrictMode: boolean;
  swcMinify: boolean;
}

const nextConfig: NextJSConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Use type assertion with unknown as an intermediate step
// This avoids the explicit 'any' while still resolving type conflicts
export default withPWA(nextConfig as unknown as Record<string, unknown>);