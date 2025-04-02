import { RPCHandler } from '@orpc/server/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import corsConfig from 'src/config/cors';

import router from 'src/controllers/rpc';
import { openAPIGenerator } from 'src/utils';

export default {
	handler: new RPCHandler(router, {
		plugins: [
			new CORSPlugin({
				...corsConfig,
			}),
		],
	}),
	docs: await openAPIGenerator.generate(router, {
		info: {
			title: 'My RPC API',
			version: '1.0.0',
		},
	}),
};
