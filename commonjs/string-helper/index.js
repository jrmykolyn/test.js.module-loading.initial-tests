// Import local utilities.
var utils = require( './_utils' );

// Define private functions.
function upper( str ) {
    if ( !utils.isString( str ) ) { return str; }

    return str.toUpperCase();
}

function lower( str ) {
    if ( !utils.isString( str ) ) { return str; }

    return str.toLowerCase();
}

function title( str ) {
    if ( !utils.isString( str ) ) { return str; }

    return str.split( ' ' )
        .map( function( word ) {
            return ( word.substring( 0, 1 ).toUpperCase() + word.substring( 1 ).toLowerCase() );
        } )
        .join( ' ' );
}

// Return public API.
module.exports = {
    upper: upper,
    lower: lower,
    title: title
};