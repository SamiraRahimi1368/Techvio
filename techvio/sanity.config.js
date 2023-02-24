import { defineConfig } from 'sanity'

import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'q8l0xi0c',
  dataset: 'production',


  plugins: [deskTool(), visionTool()],

 
})
