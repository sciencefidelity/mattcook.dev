import { defineCliConfig } from 'sanity/cli';
import { dataset, projectId } from './src/environment';

export default defineCliConfig({
  api: {
    // projectId: 'binfz6bl',
    // dataset: 'production',
    projectId,
    dataset,
  },
});
