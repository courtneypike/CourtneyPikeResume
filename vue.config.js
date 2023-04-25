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
    'pictures': {
      entry: 'src/pages/Pictures/main.js',
      template: 'public/pictures.html',
      filename: 'pictures.html',
      title: 'Pictures',
      chunks: ['chunk-vendors', 'chunk-common', 'pictures']
    },    
    'biography': {
      entry: 'src/pages/Biography/main.js',
      template: 'public/biography.html',
      filename: 'biography.html',
      title: 'Biography',
      chunks: ['chunk-vendors', 'chunk-common', 'biography']
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