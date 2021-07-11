module.exports = {
  webpack5: true,
  api: {
    bodyParser: {
      sizeLimit: "500kb",
    },
  },
  env: {},
  async headers() {
    return [
      {
        source: "/clickjacking-embedded",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
};
