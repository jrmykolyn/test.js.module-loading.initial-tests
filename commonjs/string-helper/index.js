// Define private functions.
function upper( str ) {
    if ( typeof str !== 'string' ) {
        return str;
    }

    return str.toUpperCase();
}

function lower( str ) {
    if ( typeof str !== 'string' ) {
        return str;
    }

    return str.toLowerCase();
}

// Return public API.
module.exports = {
    upper: upper,
    lower: lower
};