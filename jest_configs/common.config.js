const path = require('path');
const currentDir = relative => path.resolve(__dirname, relative);

module.exports = {
  timers: 'fake',
  globals: {
    __DEV__: true,
  },
  setupFiles: [currentDir('common.setupJestMock.js')],
  transformIgnorePatterns: ['/node_modules/'],
  rootDir: currentDir('..'),
};
