/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {
    interface IContainer {
        define(name: string, key: string, module: () => IPromise < any > ): IContainer;
        require < T > (name: string, key ? : string): IPromise < T > ;
    }
}