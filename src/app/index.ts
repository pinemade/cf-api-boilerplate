import { createMiddleware } from '@orpc/server/hono';
import rest from './rest';
import rpc from './rpc';
import { Hono } from 'hono';
import { PATH_PREFIXES } from 'src/config/constants';
import { createHTMLScalarJSONDoc } from 'src/utils';

export default new Hono()

	/**
	 * api docs.json
	 */
	.use(`${PATH_PREFIXES.API_DOCS_JSON}`, async (c) => c.json(rest.docs))
	.use(`${PATH_PREFIXES.RPC_DOCS_JSON}`, async (c) => c.json(rpc.docs))

	/**
	 * swagger interface
	 */
	.use(`${PATH_PREFIXES.API_DOCS_REFERENCE}`, async (c) => c.html(createHTMLScalarJSONDoc(PATH_PREFIXES.API_DOCS_JSON)))
	.use(`${PATH_PREFIXES.RPC_DOCS_REFERENCE}`, async (c) => c.html(createHTMLScalarJSONDoc(PATH_PREFIXES.RPC_DOCS_JSON)))

	/**
	 * app routes
	 */
	.use(`${PATH_PREFIXES.API}/*`, createMiddleware(rest.handler, { context: {} }))
	.use(`${PATH_PREFIXES.RPC}/*`, createMiddleware(rpc.handler))

	.all('*', (c) => c.notFound());
