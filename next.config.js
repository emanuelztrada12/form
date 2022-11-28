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
    URL_API: process.env.NEXT_PUBLIC_URL_API, 
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    URL_API_VEHICLE: process.env.NEXT_PUBLIC_URL_API_VEHICLE,
  },
  trailingSlash: true,
}
