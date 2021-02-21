import RouteController from '../RouteControllerTypes'
import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET

const authenticate: RouteController = async (req, res) => {
	const token = await jwt.sign(req.user._id.toString(), SECRET)
	return res.json({ ...req.user._doc, token: token })
}

export const account = {
	authenticate,
}
