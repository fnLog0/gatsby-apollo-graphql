const debug = process.env.NODE_ENV === 'development';

module.exports = {
  debug,
  siteName: '',
  author: '',
  description: '',
  siteUrl: '',

  apiUrl: debug
    ? 'https://w5xlvm3vzz.lp.gql.zone/graphql'
    : 'https://w5xlvm3vzz.lp.gql.zone/graphql',

  twitter: '@NAME-HERE',
  fbUserId: '@NAME-HERE',
  fbAppID: '@NAME-HERE',
  type: 'website',
  googleAnalytics: '',
};
