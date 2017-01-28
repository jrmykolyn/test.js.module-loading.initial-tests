define( function() {
    var cache = [];

    // Define private functions
    function addLog( msg ) {
        cache.push( buildLog( msg ) );
        return cache.length;
    }

    function buildLog( msg ) {
        return {
            msg: msg,
            timestamp: new Date().getTime()
        };
    }

    function dumpLogs() {
        return cache.splice( 0 );
    }

    // Return public API
    return {
        add: addLog,
        dump: dumpLogs
    };

} );