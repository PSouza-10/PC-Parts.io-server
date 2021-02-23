import app from '../index'
import { agent } from 'supertest'
import { dbConnect, dbDisconnect } from '../services/MongoClient'
import accountMock from '../mock/account'
let appInstance = null

beforeAll(async () => {
	appInstance = app.listen(5000)

	await dbConnect().then(() => console.log('db connected'))
})
afterAll(async () => {
	await dbDisconnect().then(() => console.log('db disconnected'))
	appInstance.close()
})
describe('Account', () => {
	it('should  redirect to google oauth', async () => {
		const page = await agent(appInstance).get('/account/google')

		expect(page.status).toBe(302)
		expect(page.header.location).toContain(
			'https://accounts.google.com/o/oauth2/v2/auth'
		)
	})

	it('should return user info', async () => {
		const res = await agent(appInstance)
			.get('/account')
			.set('authorization', accountMock.token)

		expect(res.status).toBe(200)
		console.log(res.headers)
		expect(res.header['content-type']).toContain('json')
		expect(res.body.name).toBe('Paulo Souza')
	})
})
