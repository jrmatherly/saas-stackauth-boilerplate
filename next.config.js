/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        // google profile images
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // github profile images
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        // vercel profile images
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        // vercel profile images
        protocol: "https",
        hostname: "startup-template-sage.vercel.app",
      },
      {
        // supabase profile images
        protocol: "https",
        hostname: "qpdwualqgmqaxfgoapyc.supabase.co",
      },
    ],
  },
};

export default config;
