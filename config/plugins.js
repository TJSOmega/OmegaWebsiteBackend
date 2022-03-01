module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'info@omegacc.com',
          defaultReplyTo: 'info@omegacc.com',
        },
      },
    },
  });