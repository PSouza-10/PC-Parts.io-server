import auth from './auth'
import noAuth from './noAuth'

export const product = {
	...auth,
	...noAuth,
}
