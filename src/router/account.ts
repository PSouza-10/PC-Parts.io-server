import { Router } from 'express'
import { account } from '../controller'
import passport from 'passport'
import { auth } from '../middleware'
const router = Router()
router.get('/', auth, account.getInfo)
router.get(
	'/google',
	passport.authenticate('google', { scope: 'profile', session: false })
)
router.get(
	'/google/callback',
	passport.authenticate('google', { session: false }),
	account.authenticate
)

export default router
