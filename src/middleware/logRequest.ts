import { IncomingMessage, ServerResponse } from 'http'
import { TokenIndexer } from 'morgan'
interface Request extends IncomingMessage {}
interface Response extends ServerResponse {}

export function logRequest(
	tokens: TokenIndexer<Request, Response>,
	req: Request,
	res: Response
): string {
	//Push logs to database here

	return [
		tokens.status(req, res),
		tokens.method(req, res),
		tokens.url(req, res),
		new Date().toLocaleTimeString(),
	].join(' ')
}
