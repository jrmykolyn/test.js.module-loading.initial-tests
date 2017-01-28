// Define private functions.
function upper( str ) {
    if ( typeof str !== 'string' ) {
        return str;
    }

    return str.toUpperCase();
}

// Return public API.
module.exports = {
    upper: upper
};