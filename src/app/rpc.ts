import { RPCHandler } from '@orpc/server/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import { APP_OPEN_API_INFO } from 'src/config/constants';
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
		info: APP_OPEN_API_INFO.RPC,
	}),
};
