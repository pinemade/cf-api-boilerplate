import { os } from '@orpc/server';

export default os
	/**
	 * register global middleware and context here
	 */
	// .use()

	.router({
		/**
		 * register routes and subroutes here
		 */
		users: await import('./users').then((module) => module.default),
	});
