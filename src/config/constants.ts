import { OpenAPIV3_1 } from 'openapi-types';

export const PATH_PREFIXES = {
	API: '/api',
	RPC: '/rpc',
	REFERENCE: '/reference',
	API_DOCS_JSON: '/reference/api/docs.json',
	RPC_DOCS_JSON: '/reference/rpc/docs.json',
	API_DOCS_REFERENCE: '/reference/api',
	RPC_DOCS_REFERENCE: '/reference/rpc',

	/**
	 * api paths prefixes
	 */
	USERS: '/api/users',

	/**
	 * rpc path prefixes
	 */
} satisfies Record<string, `/${string}`>;

export const APP_OPEN_API_INFO = {
	REST: {
		title: 'My REST API',
		version: '1.0.0',
		description: 'My REST API description',
	},
	RPC: {
		title: 'My RPC API',
		version: '1.0.0',
		description: 'My RPC API description',
	},
} satisfies Record<string, OpenAPIV3_1.InfoObject>;
