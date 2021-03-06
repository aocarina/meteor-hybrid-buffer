Package.describe({
  name: 'ocarina:hybrid-buffer',
  version: '0.5.3',
  // Brief, one-line summary of the package.
  summary: 'A simple way to store buffers that are readable both client and server side',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aocarina/meteor-hybrid-buffer.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function( api ) {
  api.versionsFrom( '1.0' );
  api.addFiles( 'hybrid-buffer.js' );
  api.export( 'HybridBuffer' );
});

Package.onTest(function( api ) {
  api.use( 'tinytest' );
  api.use( 'ocarina:hybrid-buffer' );
  api.addFiles( 'hybrid-buffer-tests.js' );
});
