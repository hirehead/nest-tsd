/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {
    interface IContainer {
        register(name: string, key: string, factory: () => IPromise < any > ): IContainer;
        get < T > (service: string, key ? : string): IPromise < T > ;
    }
}