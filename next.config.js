/**
 * @type {import('next').NextConfig}
 */

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  reactStrictMode: true,
}
 
module.exports = nextConfig