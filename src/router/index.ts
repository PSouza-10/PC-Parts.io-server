import { Router } from 'express'

const router = Router()

router.use('/', (req, res) => {
	return res.send('Hello')
})

export default router
