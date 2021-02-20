import app from '../index'
import { agent } from 'supertest'
import { connect } from 'mongoose'
import MongoClient from '../services/MongoClient'

let appInstance = null

beforeAll(async () => {
	appInstance = app.listen(5000)

	await new MongoClient().getAdress().then((uri) => {
		connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => {
				console.assert('Test database initialized')
			})
			.catch((err) => {
				console.log('Failed to initialize test database')
			})
	})
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
