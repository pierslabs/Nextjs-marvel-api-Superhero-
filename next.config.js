const securityHeaders = []
module.exports = {
  async headers() {
    return [
      {
        
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  reactStrictMode: true,
  images:{
    domains:['i.annihil.us']
  },
 
}
