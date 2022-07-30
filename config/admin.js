module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd676faf7a98117f3a5d11555e08f6df5'),
  },
});
