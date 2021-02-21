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
		this.express = express()

		this.database().then(() =>
			console.log('MongoDB connected on local PORT 27017')
		)
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
		if (process.env.NODE_ENV === 'development') {
		}
		mongo.connect('mongodb://localhost:27017/pcparts', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		})
	}
	async routes() {
		this.express.use(router)
	}
}

export default new App().express
