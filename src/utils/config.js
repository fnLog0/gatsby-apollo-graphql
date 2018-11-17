const debug = process.env.NODE_ENV === 'development';

module.exports = {
  debug,

  siteName: '',
  author: '',
  description: '',
  siteUrl: '',

  apiUrl: debug
    ? ''
    : '',

  twitter: '@NAME-HERE',
  fbUserId: '@NAME-HERE',
  fbAppID: '@NAME-HERE',
  type: 'website',
  googleAnalytics: '',

  backgroundColor: '#e0e0e0',
  themeColor: '#1dbe71',

  primaryColor: '#1DBE71',
};
