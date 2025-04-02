import { RPCHandler } from '@orpc/server/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import corsConfig from 'src/config/cors';

import router from 'src/controllers/rpc';

export default new RPCHandler(router, {
	plugins: [
		new CORSPlugin({
			...corsConfig,
		}),
	],
}).handle;
