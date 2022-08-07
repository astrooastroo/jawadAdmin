module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd36fdd855cc1fb7c9c8431b2f319eb81'),
  },
});
