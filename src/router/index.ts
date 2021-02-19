import { Router } from 'express'

const router = Router()

router.use('/account', (req, res) => {
	res.send('Hello')
})

export default router
