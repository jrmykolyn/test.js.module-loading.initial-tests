requirejs.config( {
    baseUrl: 'js',
    paths: {
        config: './config'
    }
} );

requirejs(
    [ 'config/options', 'logger' ],
    function( options, logger ) {
        console.log( options );

        logger.doLog( 'This is the log!' );
    }
);