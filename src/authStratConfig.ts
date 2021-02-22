import { Strategy as GoogleStrat } from 'passport-google-oauth2'
import User from './model/User'
const G_ID = process.env.GOOGLE_CLIENT_ID
const G_SECRET = process.env.GOOGLE_CLIENT_SECRET

export default new GoogleStrat(
	{
		clientID: G_ID,
		clientSecret: G_SECRET,
		callbackURL: 'http://localhost:5000/account/google/callback',
		passReqToCallback: true,
	},
	(request, accessToken, refreshToken, profile, done) => {
		const userObj = {
			googleId: profile.id,
			name: profile.displayName,
			picture: profile.picture,
		}

		User.findOneAndUpdate(
			{ googleId: profile.id },
			userObj,
			{ upsert: true, new: true, setDefaultsOnInsert: true },
			(err, user) => {
				return done(err, user, { message: 'Error on auth' })
			}
		)
	}
)
