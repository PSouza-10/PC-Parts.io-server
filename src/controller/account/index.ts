import RouteController from '../RouteControllerTypes'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET
const FRONTEND = process.env.NODE_ENV
	? process.env.FRONTEND_PROD
	: process.env.FRONTEND_DEV
const authenticate: RouteController = async (req, res) => {
	const token = await jwt.sign(req.user._id.toString(), SECRET)
	return res.redirect(FRONTEND + `?token=${token}`)
}
const getInfo: RouteController = async (req, res) => {
	return res.json(req.user)
}

const getInfo: RouteController = async (req, res) => {
	return res.json(req.user)
}
export const account = {
	authenticate,
	getInfo,
}
