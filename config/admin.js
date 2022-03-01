module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7938f5e0bc1bbd65350793490bfb8327'),
  },
});
