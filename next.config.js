module.exports = {
    async redirects() {
      return [
        {
          source: '/tmp',
          destination: '/korea',
          permanent: true,
        },
      ]
    },
  }