module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    domains: [
      'firebasestorage.googleapis.com',
    ],
  },
  env: {
    AIR_URL:      process.env.NEXT_PUBLIC_URL, 
    AIR_GENERAL:  process.env.NEXT_PUBLIC_GENERAL,
    AIR_FATHER:   process.env.NEXT_PUBLIC_URL_FATHER,
    AIR_API_KEY:  process.env.NEXT_PUBLIC_API_KEY,
  },
  trailingSlash: true,
}