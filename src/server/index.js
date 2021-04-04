const { resolve } = require( 'path' );

// ignore `.scss` imports
require( 'ignore-styles' );

// transpile imports on the fly
require( '@babel/register')( {
  configFile: resolve( __dirname, '../../babel.config.js' ),
} );

// import express server
require( './server.js' );