/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {

    interface IBootstrap {
        register(step: (app : INest, next : () => void) => any);
        register(steps: Array < (app : INest, next : () => void) => any > );

        start(): IPromise < any > ;
        start(done ? : () => any);
        continue ();
    }
}