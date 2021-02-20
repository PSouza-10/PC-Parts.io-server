import { Router } from 'express'

const router = Router()

router.get('/account', (req, res) => {
	return res.send('Hello')
})

router.post('/', (req, res) => {
	const email = req.body.email

	return res.send({ email: email.split('').reverse().join('') })
})
export default router
