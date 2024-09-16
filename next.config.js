import bundleAnalyzer from "@next/bundle-analyzer";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TODO - should be removed in nextjs-starter-kit for app router option
  // pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyzer(withVanillaExtract(nextConfig));
