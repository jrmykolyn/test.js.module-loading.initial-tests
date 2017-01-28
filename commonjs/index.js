var stringHelper = require( './string-helper' );

console.log( stringHelper.upper( 'this string was initial lower case.' ) );

console.log( stringHelper.lower( 'THIS STRING WAS INITIALLY UPPER CASE.' ) );

console.log( stringHelper.lower( [ 'This argument is not a string, and will not be transformed' ] ) );

console.log( stringHelper.title( 'This text is in sentence case, but it should be converted to title case.' ) );

console.log( stringHelper.sentence( 'This TEXT is In A WeiRd Case, BUT IT shouLD be CONverted to seNTENCE cAse.' ) );

console.log( 'The result of calling `stringHelper.capitalize( "name" )` is:', stringHelper.capitalize( 'Name' ) );
