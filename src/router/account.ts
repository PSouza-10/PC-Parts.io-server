import { Router } from 'express'
import { account } from '../controller'
import { auth } from '../middleware'
const router = Router()

router.post('/register', account.register)
router.post('/login', account.login)
router.post('/forgot', account.forgot)

router.get('/', auth, account.refresh)

router.put('/reset-password', auth, account.resetPassword)
router.put('/', auth, account.setInfo)

export default router
