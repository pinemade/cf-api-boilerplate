export interface HandlerExport {
	handle: unknown;
	generateDoc(): Promise<unknown>;
}
