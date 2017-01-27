requirejs.config( {
    baseUrl: 'js',
    paths: {
        config: './config'
    }
} );

requirejs( [ 'config/options' ], function( options ) {
    console.log( options );
} );