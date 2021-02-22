import jwt from 'jsonwebtoken'
import User from '../model/User'
import { Request, Response, NextFunction } from 'express'
export async function auth(req: Request, res: Response, next: NextFunction) {
	const token = req.header('x-auth-token')

	if (!token) {
		return res.status(401).send({
			err: 'MISSING_AUTH_TOKEN',
			msg: 'Credenciais insuficientes para a operação',
		})
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)

		let user
		await User.findById(decoded, (err, doc) => {
			if (err) throw err
			else {
				user = doc
			}
		})

		if (!user) {
			return res.status(404).send({
				err: 'USER_NOT_FOUND',
				msg:
					'Não foi encontrado um usuário com as credenciais especificadas',
			})
		}

		req.user = user

		next()
	} catch (e) {
		console.error(e)
		return res.status(500).send({
			err: 'SERVER_ERROR',
			msg: 'Ocorreu um erro no servidor',
		})
	}
}
