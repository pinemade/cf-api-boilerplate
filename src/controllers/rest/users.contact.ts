import { oc } from '@orpc/contract';
import { oz } from '@orpc/zod';
import { PATH_PREFIXES } from 'src/config/constants';
import { z } from 'zod';

export default oc
	/**
	 * register meta here
	 */
	.prefix(PATH_PREFIXES.USERS)
	.router({
		/**
		 * define contract route here
		 */
		getUsers: oc
			.route({
				method: 'GET',
				path: '/',
				inputStructure: 'detailed',
				outputStructure: 'detailed',
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
					body: z.object({
						data: z.array(
							z.object({
								id: z.string({}),
								name: z.string(),
								email: z.string(),
							})
						),
					}),
				})
			),

		uploadUserAvatar: oc
			.route({
				method: 'POST',
				path: '/upload-avatar',
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
