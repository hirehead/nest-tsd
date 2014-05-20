/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {

    /**
     * Expect config like next
     */
    interface IBootstraperLoader {
        register(json: Array<any> );
        register(json?: string );
    }
    /*
nest: {
    bootstrap: [
        'some',
        ['foo','bar&do'],
        'wait', //register and wait until done
        'do/some&init',
        'start', //register and do not wait
        'reg'
    ]
}
*/
}