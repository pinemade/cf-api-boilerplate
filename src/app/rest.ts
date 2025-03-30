import { OpenAPIHandler } from '@orpc/openapi/fetch';
import { Context } from '@orpc/server';
import { CORSOptions, CORSPlugin } from '@orpc/server/plugins';
import { ZodSmartCoercionPlugin } from '@orpc/zod';

import router from 'src/controllers/rest';
import { HandlerExport } from 'src/types';
import { openAPIGenerator } from 'src/utils';

const corsConfig: CORSOptions<Context> = {};

const handler = new OpenAPIHandler(router, {
	plugins: [
		new CORSPlugin({
			...corsConfig,
		}),
		new ZodSmartCoercionPlugin(),
	],
});

export default {
	handle: handler.handle,
	generateDoc: async () =>
		openAPIGenerator.generate(router, {
			info: {
				title: 'REST API',
				version: '1.0.0',
			},
		}),
} satisfies HandlerExport;
