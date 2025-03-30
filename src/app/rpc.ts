import { Context } from '@orpc/server';
import { RPCHandler } from '@orpc/server/fetch';
import { CORSOptions, CORSPlugin } from '@orpc/server/plugins';

import router from 'src/controllers/rpc';
import { HandlerExport } from 'src/types';
import { openAPIGenerator } from 'src/utils';

const corsConfig: CORSOptions<Context> = {};

const handler = new RPCHandler(router, {
	plugins: [
		new CORSPlugin({
			...corsConfig,
		}),
	],
});

export default {
	handle: handler.handle,
	generateDoc: async () =>
		openAPIGenerator.generate(router, {
			info: {
				title: 'RPC API',
				version: '1.0.0',
			},
		}),
} satisfies HandlerExport;
