/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {
    interface ServiceFunction {
        new(...args: Array < any > ): any;
        $serviceName ? : string;
        $serviceKey ? : string;
        $serviceInject ? : Array < string > ;
        $serviceFactory ? : () => IPromise < any > ;
    }

    interface IContainerRegistrator {
        register(service: ServiceFunction): IContainerRegistrator;
    }
}