module.exports = {
  pages: {
    'index': {
      entry: 'src/pages/Home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    '': {
      entry: 'src/pages/Resume/main.js',
      template: 'public/resume.html',
      filename: 'resume.html',
      title: 'Resume',
      chunks: ['chunk-vendors', 'chunk-common', 'resume']
    },
  }
}