import app from '../index'
import { agent } from 'supertest'
let appInstance = null

beforeAll(async () => {
	appInstance = app.listen(5000)
})
describe('GET endpoint works', () => {
	it('Responds with hello', async () => {
		const res = await agent(app).get('/account')
		expect(res.text).toEqual('Hello')
		expect(res.status).toEqual(200)
	})
})

afterAll(async () => {
	appInstance.close()
})
