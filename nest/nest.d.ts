declare module Nest{

	export interface AppServiceRegistration {
		name: string;
		key: string;
		instance: any;
		/**
		* if true then by container implementation should be registered
		* before the rest of the system
		* if false, then after the rest of the system was registered 
		*/
		registerBefore?: boolean;
	}

	export interface INest {
		data : Array<AppServiceRegistration>;
	}
}