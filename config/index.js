// Template version: 1.1.3
// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path');
const argv = require('yargs').argv;

const buildMode = argv.m || 'rap';

console.log('buildMode:', buildMode);
const publicPath = '';
const hostSubfix = {
  rap: 'rap',
  outerRap: 'outerRap',
  mock: 'mock',
};

// 这里添加需要的模块
const apiModules = ['test'];

const rapModuleIds = {
  test: '1',
};

const outerRapModuleIds = {
  test: '31',
};

const mockModuleIds = {
  test: '58c0bfe972ecd90d840f15e5',
};


// apiModules + hostSubfix
const apiHost = {};

apiModules.forEach((m) => {
  for (const key in hostSubfix) {
    if (hostSubfix.hasOwnProperty(key)) {
      apiHost[key] = apiHost[key] || {};

      if (hostSubfix[key] === 'mock') {
        apiHost[key][m] = `http://mock.xxx.com/mock/${mockModuleIds[m]}`;
      } else if (hostSubfix[key] === 'rap') {
        apiHost[key][m] = `http://127.0.0.1:8080/mockjsdata/${rapModuleIds[m]}`;
      } else if (hostSubfix[key] === 'outerRap') {
        apiHost[key][m] = `http://rap.xxx.com:8080/mockjsdata/${outerRapModuleIds[m]}`;
      }
    }
  }
});

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, `../dist/${publicPath}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${publicPath}`),
    assetsPublicPath: `${publicPath}`,
    productionSourceMap: false, // 不接入sentry，先不开启
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build -- --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: !!argv.report
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    autoOpenBrowser: true,
    assetsPublicPath: `${publicPath}`,
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    // 是否启用移动端调试工具vconsole
    // `npm run dev -- --debug`
    // Set to `true` or `false` to always turn it on or off
    vConsole: !!argv.debug
  },
  buildMode,
  publicPath,
  apiDomain: apiHost[buildMode],
  apiModules,
};
