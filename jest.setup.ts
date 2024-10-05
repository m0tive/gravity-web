// jest.setup.ts
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import fetch from 'node-fetch';

declare global {
  const Request: typeof fetch.Request;
  const Response: typeof fetch.Response;
  const fetch: typeof fetch;
}

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



