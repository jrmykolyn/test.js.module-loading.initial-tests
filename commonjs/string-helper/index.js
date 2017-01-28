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

function sentence( str ) {
    if ( !utils.isString( str ) ) { return str; }

    return lower( str ).split( ' ' )
        .map( function( word, index ) {
            return ( index === 0 ) ? capitalize( word ) : word;
        } )
        .join( ' ' );
}

function capitalize( str ) {
    if ( !utils.isString( str ) ) { return str; }

    return ( upper( str.substring( 0, 1 ) ) + str.substring( 1 ) );
}

// Return public API.
module.exports = {
    upper: upper,
    lower: lower,
    title: title,
    sentence: sentence,
    capitalize: capitalize
};