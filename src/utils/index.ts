import { OpenAPIGenerator } from '@orpc/openapi';
import { ZodToJsonSchemaConverter } from '@orpc/zod';

export const openAPIGenerator = new OpenAPIGenerator({
	schemaConverters: [new ZodToJsonSchemaConverter()],
});

export const createHTMLScalarJSONDoc = (jsonPath: string) => {
	const dataConfiguration = {
		authentication: {
			preferredSecurityScheme: 'bearerAuth',
			http: {
				bearer: { token: 'default-token' },
			},
		},
	};

	return `
				<!doctype html>
				<html>
						<head>
								<title>My Client</title>
								<meta charset="utf-8" />
								<meta name="viewport" content="width=device-width, initial-scale=1" />
								<link rel="icon" type="image/svg+xml" href="https://orpc.unnoq.com/icon.svg" />
						</head>
						<body>
								<script
										id="api-reference"
										data-url="${jsonPath}"
										data-configuration="${JSON.stringify(dataConfiguration).replaceAll('"', '&quot;')}">
								</script>
								<script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"></script>
						</body>
				</html>
		`;
};
