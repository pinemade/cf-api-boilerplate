import { OpenAPIHandler } from '@orpc/openapi/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import { ZodSmartCoercionPlugin } from '@orpc/zod';
import { APP_OPEN_API_INFO } from 'src/config/constants';
import corsConfig from 'src/config/cors';

import router from 'src/controllers/rest';
import { openAPIGenerator } from 'src/utils';

export default {
	handler: new OpenAPIHandler(router, {
		plugins: [
			new CORSPlugin({
				...corsConfig,
			}),
			new ZodSmartCoercionPlugin(),
		],
	}),
	docs: await openAPIGenerator.generate(router, {
		info: APP_OPEN_API_INFO.REST,
	}),
};
