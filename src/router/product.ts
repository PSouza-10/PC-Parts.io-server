import { product } from '../controller'
import { Router } from 'express'
import { auth } from '../middleware'

const router = Router()

router.get('/:category', product.getCategory)
router.get('/sell', auth, product.getByUser)
router.get('/search', product.getByTerm)
router.get('/watchlist/:productId', auth, product.setWatchList)

router.post('/sell', auth, product.registerForSale)
router.post('/buy/:productId', auth, product.buyProduct)

router.put('/', auth, product.editSale)

router.delete('/sell', auth, product.removeSale)

export default router
