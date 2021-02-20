import { Router } from 'express'
import productRouter from './product'
import accountRouter from './account'
const router = Router()

router.get('/account', accountRouter)
router.post('/product', productRouter)
export default router
