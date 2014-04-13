/// <reference path="../nest-async/nest-async.d.ts" />
/// <reference path="../nest-container/nest-container.d.ts" />

declare module Nest{
	interface INest {
	    q ? : IAsync;
	    container ? : IContainer;
	    data: {
	        [key: string]: any
	    };
	}
}