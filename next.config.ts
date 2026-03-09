const nextConfig = {
  images: {
    domains: ['utfs.io', 'nbhxogddwj.ufs.sh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'nbhxogddwj.ufs.sh', // ← زيد هذا
        port: ''
      }
    ]
  }
}
module.exports = nextConfig