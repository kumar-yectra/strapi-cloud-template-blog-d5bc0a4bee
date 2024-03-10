module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', "4319ec5230e5eb9448532bbe34f5b4dd1befb20d2a33c07e44d3d952074da06f"),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "97831720843178560062efd21e8c3cecb6c37ebe9192794b3e7f38febde07cf4"),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "839bdb5e988a039644c76c3b8dfd05a70a356741f55efeeaf104e59d631f245f"),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
