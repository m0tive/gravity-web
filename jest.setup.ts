// jest.setup.ts
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
import fetch, { Request, Response } from 'node-fetch';

global.Request = Request;
global.Response = Response;
global.fetch = fetch;

//global.import = {
//  meta: {
//    env: {
//      VITE_BUILD_TIME: 'mocked-build-time',
//      VITE_GIT_HASH: 'mocked-git-hash',
//    },
//  },
//};



