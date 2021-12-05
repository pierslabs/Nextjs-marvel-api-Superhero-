module.exports = {
  reactStrictMode: true,
  images:{
    domains:['i.annihil.us']
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
 
}
