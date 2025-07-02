import { defineConfig } from 'contributorkit'

export default defineConfig({
  outputDir: './screenshot',
  owner: 'hunghg255',
  repo: 'reactjs-player-media',
  renders: [
    {
      name: 'contributor-wide',
      width: 1000,
      formats: ['svg'],
    },
    {
      renderer: 'circles',
      name: 'contributor-circles',
      width: 1000,
    },
  ],
})
