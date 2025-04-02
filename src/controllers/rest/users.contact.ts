import { oc } from '@orpc/contract';
import { oz } from '@orpc/zod';
import { z } from 'zod';

export default oc
	/**
	 * define meta here
	 */
	// .$meta({})
	.router({
		/**
		 * define contract route here
		 */
		getUsers: oc
			.route({
				method: 'GET',
				path: '/users',
				inputStructure: 'detailed',
			})
			.input(
				z.object({
					query: z.object({
						page: z.number().default(1),
						limit: z.number().default(10),
					}),
				})
			)
			.output(
				z.object({
					data: z.array(
						z.object({
							id: z.string({}),
							name: z.string(),
							email: z.string(),
						})
					),
				})
			),

		uploadUserAvatar: oc
			.route({
				method: 'POST',
				path: '/users/upload-avatar',
			})
			.input(
				z.object({
					body: oz.file('Fileee'),
				})
			)
			.output(
				z.object({
					message: z.union([
						z.literal('success', {
							description: 'Success',
						}),
						z.literal('error', {
							description: 'Error',
						}),
					]),
				})
			),
	});
