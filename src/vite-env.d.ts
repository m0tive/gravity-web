/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_TIME: string;
  readonly VITE_GIT_HASH: string;
  // Add more environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
