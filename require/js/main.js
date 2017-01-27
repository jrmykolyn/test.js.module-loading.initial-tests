requirejs.config( {
    baseUrl: 'js',
    paths: {
        config: './config'
    }
} );

requirejs(
    [ 'config/options', 'logger', 'math/math' ],
    function( options, logger, math ) {
        console.log( options );

        logger.doLog( 'This is the log!' );
    }
);