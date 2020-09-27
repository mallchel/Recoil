const path = require('path');

const commonConfig = require('../common.config');
const currentDir = relative => path.resolve(__dirname, relative);

module.exports = {
  ...commonConfig,
  setupFiles: [...commonConfig.setupFiles, currentDir('setupJestMock.js')],
  displayName: ' concurrent',
  moduleNameMapper: {
    Recoil_CreateReactRoot:
      '<rootDir>/src/testing/Recoil_CreateReactRootConcurrent',
  },
  testPathIgnorePatterns: [
    'src/hooks/__tests__/Recoil_PublicHooks-test.js',
    'src/hooks/__tests__/Recoil_useRecoilSnapshot-test.js',
  ],
};
