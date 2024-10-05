// jest.setup.ts
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import fetch from 'node-fetch';

// Assigning directly to global without redeclaration
(global as any).Request = fetch.Request;
(global as any).Response = fetch.Response;
(global as any).fetch = fetch;

//global.import = {
//  meta: {
//    env: {
//      VITE_BUILD_TIME: 'mocked-build-time',
//      VITE_GIT_HASH: 'mocked-git-hash',
//    },
//  },
//};



