import { Router } from 'express'
import productRouter from './product'
import accountRouter from './account'

const router = Router()

router.use('/account', accountRouter)
router.use('/product', productRouter)

export default router
