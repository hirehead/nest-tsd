/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {

    interface IBootstraper {
        register(step: (app: INest, next: () => void) => any);
        register(steps: Array < (app: INest, next: () => void) => any > );

        wait(): IPromise < any > ;
        wait(done ? : () => any);
        start();
    }
}