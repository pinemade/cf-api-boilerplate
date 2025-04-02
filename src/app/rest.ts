import { OpenAPIHandler } from '@orpc/openapi/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import { ZodSmartCoercionPlugin } from '@orpc/zod';
import corsConfig from 'src/config/cors';

import router from 'src/controllers/rest';

export default new OpenAPIHandler(router, {
	plugins: [
		new CORSPlugin({
			...corsConfig,
		}),
		new ZodSmartCoercionPlugin(),
	],
}).handle;
