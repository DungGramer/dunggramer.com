import { defineCliConfig } from 'sanity/cli';
import { projectId, dataset } from './environment';

export default defineCliConfig({
  graphql: [
    {
      tag: 'v1',
      workspace: 'production-workspace',
    },
  ],
  api: {
    projectId,
    dataset,
  },
  vite: {
    resolve: {
      alias: {
        '@': __dirname,
      },
    },
  },
});
