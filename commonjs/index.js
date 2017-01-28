var stringHelper = require( './string-helper' );

console.log( stringHelper.upper( 'this string was initial lower case.' ) );

console.log( stringHelper.lower( 'THIS STRING WAS INITIALLY UPPER CASE.' ) );

console.log( stringHelper.lower( [ 'This argument is not a string, and will not be transformed' ] ) );
