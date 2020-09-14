module.exports = ({ env }) => ({
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env("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"),
      },
      settings: {
        defaultFrom: 'juliasedefdjian@strapi.io',
        defaultReplyTo: 'juliasedefdjian@strapi.io',
      },
    },
  });