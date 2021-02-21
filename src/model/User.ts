import { model, Schema } from 'mongoose'

export interface IUser {
	[x: string]: any
	watching: Schema.Types.ObjectId[]
	name: string
	googleId: string
	picture: string
}

interface IUserDoc extends IUser, Document {}

const UserFields: Record<keyof IUser, any> = {
	watching: {
		type: [Schema.Types.ObjectId],
		required: false,
		default: [],
	},
	googleId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
}

const UserSchema = new Schema(UserFields)

export default model('user', UserSchema)
