/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {
    interface ModuleFunction {
        new(...args: Array < any > ): any;
        $serviceName ? : string;
        $serviceKey ? : string;
        $serviceInject ? : Array < string > ;
        $serviceFactory ? : () => IPromise < any > ;
    }

    interface IContainerRegistrator {
        register(module: ModuleFunction): IContainerRegistrator;
    }
}