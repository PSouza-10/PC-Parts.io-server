import { Request, Response } from 'express'
import { IUser } from '../model/User'
interface AppRequest extends Request {
	user?: IUser
}

type RouteController = (req: AppRequest, res: Response) => any

export default RouteController
