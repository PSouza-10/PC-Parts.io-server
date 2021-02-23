import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { logRequest } from './middleware'
import router from './router'
import mongo from 'mongoose'
import passport from 'passport'
import passportConfig from './authStratConfig'

interface IApp {
	express: Express

	middleware: () => void
	database: () => void
	routes: () => void
}
class App implements IApp {
	express: Express

	constructor() {
		console.log(process.env.NODE_ENV)
		this.express = express()

		this.database()

		this.middleware().then(() => console.log('Middleware set up'))
		this.routes().then(() => console.log('Routes Initialized'))
	}

	async middleware() {
		this.express.use(express.json())
		this.express.use(cors())
		this.express.use(morgan(logRequest, { immediate: false }))
		this.express.use(passport.initialize())
		passport.use(passportConfig)
	}
	async database() {
		if (process.env.NODE_ENV !== 'test') {
			mongo
				.connect(process.env.MONGO_URI, {
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useFindAndModify: false,
				})
				.then(() => console.log('MongoDB connected to Atlas'))
				.catch(() => console.log('Error on MongoDB Connect'))
		}
	}
	async routes() {
		this.express.use(router)
	}
}

export default new App().express
