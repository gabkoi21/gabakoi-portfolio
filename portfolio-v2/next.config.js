/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows verification to bypass a locked OneDrive .next cache when needed.
  distDir: process.env.NEXT_DIST_DIR || '.next',
};

module.exports = nextConfig;
