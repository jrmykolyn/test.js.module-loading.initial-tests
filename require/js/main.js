requirejs.config( {
    baseUrl: 'js',
    paths: {
        config: './config'
    }
} );

requirejs(
    [ 'config/options', 'logger/logger', 'math/math' ],
    function( options, logger, math ) {
        // Test 'first batch' of logs, stored within internal `cache`.
        logger.add( 'This is the first log item.' );
        logger.add( 'This is the second log item.' );
        logger.add( 'This is the third log item.' );

        var logsInit = logger.dump();

        console.log( logsInit );

        // Test 'second batch' of logs, stored within internal `cache`.
        logger.add( 'This is a new log item.' );

        var logsNew = logger.dump();

        console.log( logsNew );
    }
);