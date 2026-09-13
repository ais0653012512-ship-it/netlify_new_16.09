/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  experimental: {
    optimizePackageImports: [
      '@chakra-ui/react',
      '@saas-ui/react',
      'lucide-react',
      'react-icons',
      'date-fns',
    ],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.xx.fbcdn.net' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/meta-verified',
        destination: '/business-verify',
        permanent: true,
      },
      {
        source: '/meta-verified-for-business',
        destination: '/business-verify',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
