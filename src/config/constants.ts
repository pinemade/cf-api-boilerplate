export const PATH_PREFIXES = {
	API: '/api',
	RPC: '/rpc',
	REFERENCE: '/reference',
	API_DOCS_JSON: '/reference/api/docs.json',
	RPC_DOCS_JSON: '/reference/rpc/docs.json',
	API_DOCS_REFERENCE: '/reference/api',
	RPC_DOCS_REFERENCE: '/reference/rpc',
} satisfies Record<string, `/${string}`>;
