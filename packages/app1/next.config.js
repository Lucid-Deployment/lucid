module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    ATLAS_URL: 'mongodb://app1:secret123@localhost:27017/app1?authSource=admin',
    NEXT_API_URL: 'http://localhost:3000/api',
  },
};
