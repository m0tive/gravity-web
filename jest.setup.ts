// jest.setup.ts
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import fetch from 'node-fetch';

global.Request = fetch.Request;
global.Response = fetch.Response;
global.fetch = fetch;

//global.import = {
//  meta: {
//    env: {
//      VITE_BUILD_TIME: 'mocked-build-time',
//      VITE_GIT_HASH: 'mocked-git-hash',
//    },
//  },
//};



