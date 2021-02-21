import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

const mongoServer = new MongoMemoryServer()

export const dbConnect = async () => {
	const uri = await mongoServer.getUri()

	const mongooseOpts = {
		useNewUrlParser: true,
		useUnifiedTopology: false,
		useCreateIndex: true,
		useFindAndModify: true,
	}

	await mongoose.connect(uri, mongooseOpts)
}

export const dbDisconnect = async () => {
	await mongoose.connection.dropDatabase()
	await mongoose.connection.close()
	await mongoServer.stop()
}
