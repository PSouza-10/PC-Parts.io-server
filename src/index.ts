import express, { Express } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { logRequest } from './utils'
import router from './router'
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
	}

	middleware() {
		this.express.use(express.json())
		this.express.use(cors())
		this.express.use(morgan(logRequest, { immediate: false }))
	}
	database() {}
	routes() {
		this.express.use(router)
	}
}

export default new App().express
