declare module Nest {
    interface StepFunction {
        (app: INest, next: () => void, ...args: Array < any > );
        $serviceInject ? : Array < string > ;
    }

    interface IContainerRegistrator {
        register(step: StepFunction);
    }
}