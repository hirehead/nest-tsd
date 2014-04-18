declare module Nest {

    export interface AppServiceRegistration {
        name: string;
        key: string;
        instance: any;
    }

    export interface INest {
        data: Array < AppServiceRegistration > ;
    }
}