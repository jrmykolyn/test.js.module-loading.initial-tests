System.config( {
    map: {
        app: './js/app'
    }
} );

System.import( 'app/app.js' ).then(
    function( app ) {
        console.log( app.init() );
    }
);