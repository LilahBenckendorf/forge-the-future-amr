import type { NextConfig } from 'next';

const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === 'true' ? '/forge-the-future-amr' : '';

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: githubPagesBasePath,
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: githubPagesBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
