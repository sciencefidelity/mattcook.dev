import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { structure } from './src/structure';
import { schemaTypes } from './src/schemas';
import { dataset, projectId } from './src/environment';

export default defineConfig({
  name: 'default',
  title: 'Matt Cook',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
