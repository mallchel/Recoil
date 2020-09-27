/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * @flow strict-local
 * @format
 */

const React = require('React');
const ReactDOM = require('ReactDOM');

function createReactRoot(container: HTMLElement, contents: React.Node) {
  // To test in Concurrent Mode
  ReactDOM.unstable_createRoot(container).render(contents);
}

module.exports = {
  createReactRoot,
};
