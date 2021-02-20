import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { logRequest } from './middleware'
import router from './router'
import mongo from 'mongoose'
interface IApp {
	express: Express
	middleware: () => void
	database: () => void
	routes: () => void
}
class App implements IApp {
	express: Express

	constructor() {
		this.express = express()
		this.middleware()
		this.database()
		this.routes()
	}

	middleware() {
		this.express.use(express.json())
		this.express.use(cors())
		this.express.use(morgan(logRequest, { immediate: false }))
	}
	database() {
		if (process.env.NODE_ENV === 'production') {
		}

		mongo
			.connect('mongodb://localhost:27017/pcparts', {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log('MongoDB connected on local PORT 27017'))
	}
	routes() {
		this.express.use(router)
	}
}

export default new App().express
