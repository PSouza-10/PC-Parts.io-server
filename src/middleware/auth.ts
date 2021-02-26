import User from '../model/User'
import jwt from 'jsonwebtoken'
import { ExpressMiddleware } from './Types'
import errors from '../errors'
export const auth: ExpressMiddleware = async (req, res, next) => {
	const token = req.header('authorization')

	if (!token) {
		return res.status(401).send(errors.MISSING_AUTHORIZATION)
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		console.log(decoded)
		req.user = await User.findById(decoded)
		if (req.user) {
			return next()
		} else {
			return res.status(404).json(errors.USER_NOT_FOUND)
		}
	} catch (e) {
		console.error(e)
		return res.status(500).send(errors.SERVER_ERROR)
	}
}
