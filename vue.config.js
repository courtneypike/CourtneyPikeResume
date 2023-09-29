module.exports = {
  pages: {
    'index': {
      entry: 'src/pages/Home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'resume': {
      entry: 'src/pages/Resume/main.js',
      template: 'public/resume.html',
      filename: 'resume.html',
      title: 'Resume',
      chunks: ['chunk-vendors', 'chunk-common', 'resume']
    },
    'coverify': {
      entry: 'src/pages/Coverify/main.js',
      template: 'public/coverify.html',
      filename: 'coverify.html',
      title: 'Coverify',
      chunks: ['chunk-vendors', 'chunk-common', 'coverify']
    },    
    'piano': {
      entry: 'src/pages/Piano/main.js',
      template: 'public/piano.html',
      filename: 'piano.html',
      title: 'Piano',
      chunks: ['chunk-vendors', 'chunk-common', 'piano']
    },
  }
}