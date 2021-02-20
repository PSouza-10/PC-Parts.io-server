import { MongoMemoryServer } from 'mongodb-memory-server'

interface ITestDB {
	server: MongoMemoryServer
}

class TestDB implements ITestDB {
	server: MongoMemoryServer
	constructor() {
		this.server = new MongoMemoryServer({ autoStart: true })
	}

	async getAdress() {
		return await this.server.getUri()
	}
}

export default TestDB
