declare module Nest {

    export interface AppModule {
        name: string;
        key: string;
        instance: any;
    }

    export interface INest {
        modules: Array < AppModule > ;
    }
}