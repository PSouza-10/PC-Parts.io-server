import app from '../index'
import { agent } from 'supertest'
import { dbConnect, dbDisconnect } from '../services/MongoClient'

let appInstance = null

beforeAll(async () => {
	appInstance = app.listen(5000)

	await dbConnect().then(() => console.log('db connected'))
})
afterAll(async () => {
	appInstance.close()
	await dbDisconnect().then(() => console.log('db disconnected'))
})
describe('Register route', () => {
	it('should  create a user', async () => {})
})
