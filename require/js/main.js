requirejs.config( {
    baseUrl: 'js',
    paths: {
        config: './config'
    }
} );

requirejs(
    [ 'config/options', 'logger/logger', 'math/math' ],
    function( options, logger, math ) {
        logger.add( 'This is the first log item.' );
        logger.add( 'This is the second log item.' );
        logger.add( 'This is the third log item.' );

        var logs = logger.dump();

        console.log( logs );
    }
);