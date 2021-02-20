import noAuth from './noAuth'
import auth from './auth'

export const account = {
	...auth,
	...noAuth,
}
