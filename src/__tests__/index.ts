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

	it('Should return my email', async () => {
		const email = 'paulosouza300272@gmail.com'
		const res = await agent(app).post('/').send({ email })
		expect(res.body.email).toEqual(email.split('').reverse().join(''))
	})
})

afterAll(async () => {
	appInstance.close()
})
