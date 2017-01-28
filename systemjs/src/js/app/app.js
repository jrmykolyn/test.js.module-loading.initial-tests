import * as db from 'app/_db-module';

export function init() {

    console.log( 'INSIDE THE `init()` FUNCTION' );

    db.connect();
    db.disconnect();

    return 1;
}