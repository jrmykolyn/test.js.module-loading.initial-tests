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

// Return public API.
module.exports = {
    upper: upper,
    lower: lower
};