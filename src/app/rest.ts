import { OpenAPIHandler } from '@orpc/openapi/fetch';
import { CORSPlugin } from '@orpc/server/plugins';
import { ZodSmartCoercionPlugin } from '@orpc/zod';
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
		info: {
			title: 'OpenAPI Exampleeee',
			version: '1.0.0',
		},
	}),
};
