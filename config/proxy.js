/* eslint-disable */
// handle '/api' only if '/' is presence after 'api' like: '/api/'
var apiLocalPathRegExp = '^/api(?=/)';
/* eslint-enable */

module.exports = {
  '/api': {
    target: process.env.API_REMOTE_URL,
    pathRewrite: { [apiLocalPathRegExp]: '' },
    changeOrigin: true,
  },
  '/api-local': {
    target: process.env.API_LOCAL_PATH,
    pathRewrite: { '^/api-local': '' },
  },
};
