module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:'https://agent-strapi.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '91e8f369c255c94c545b9011f964114a'),
    },
  },
});
