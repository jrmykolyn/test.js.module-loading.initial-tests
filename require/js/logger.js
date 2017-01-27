define( function() {
    // Define private functions
    function doLog( msg ) {
        console.log( msg );
    }

    // Return public API
    return {
        doLog: doLog
    };

} );