import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './src/schemas'

export default createConfig({
  name: 'default',
  title: 'Matt Cook',

  projectId: 'binfz6bl',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
