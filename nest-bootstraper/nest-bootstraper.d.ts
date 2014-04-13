/// <reference path="../nest/nest.d.ts" />
/// <reference path="../nest-async/nest-async.d.ts" />

declare module Nest {

    interface StepFunctionCallback {
        (app ? : INest, next ? : () => void) : any;
    }
    interface StepFunctionPromise {
        (app ? : INest) : IPromise < INest > ;
    }
    interface StepFunction {
        (app ? : INest) : INest;
    }

    interface IBootstrap {
        register(step: StepFunction): IBootstrap;
        register(step: StepFunctionCallback): IBootstrap;
        register(step: StepFunctionPromise): IBootstrap;
        register(steps: Array < StepFunction > ): IBootstrap;

        start(done ? : (bootsrap ? : IBootstrap) => any): IPromise < IBootstrap > ;
        continue (): IBootstrap;
    }
}