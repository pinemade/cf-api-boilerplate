/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { rest, rpc } from 'src/app';
import { PATH_PREFIXES } from 'src/config/constants';

export default {
	async fetch(request, env, ctx) {
		const { pathname } = new URL(request.url);

		if (pathname.startsWith(PATH_PREFIXES.API)) {
			const { matched, response } = await rest.handle(request, {
				prefix: PATH_PREFIXES.API,
				context: {},
			});

			if (matched) return response;
		}

		if (pathname.startsWith(PATH_PREFIXES.RPC)) {
			const { matched, response } = await rpc.handle(request, {
				prefix: PATH_PREFIXES.RPC,
				context: {},
			});

			if (matched) return response;
		}

		return new Response(
			JSON.stringify({
				message: `Path ${pathname} not found`,
			}),
			{
				status: 404,
				statusText: 'Not Found',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	},
} satisfies ExportedHandler<Env>;
