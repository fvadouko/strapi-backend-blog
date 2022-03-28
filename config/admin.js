module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cc65d522481548c7fa6ff15ddc457495'),
  },
});
