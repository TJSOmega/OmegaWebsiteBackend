module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '950206d559637152177075594cfc9915'),
  },
});
