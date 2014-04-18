declare module Nest{

	interface IPromise < T > {
	    then < U > (onFulfill: (value: T) => IPromise < U > , onReject ? : (reason: any) => IPromise < U > ): IPromise < U > ;
	    then < U > (onFulfill: (value: T) => IPromise < U > , onReject ? : (reason: any) => U): IPromise < U > ;
	    then < U > (onFulfill: (value: T) => U, onReject ? : (reason: any) => IPromise < U > ): IPromise < U > ;
	    then < U > (onFulfill: (value: T) => U, onReject ? : (reason: any) => U): IPromise < U > ;
	}

	interface IDeferred < T > {
	    promise: IPromise < T > ;
	    resolve(value: T): void;
	    reject(reason: any): void;
	}

	interface IAsync {
	    defer < T > (): IDeferred < T > ;
	    all < T > (promises: IPromise < T > []): IPromise < T[] > ;
	}
}