import express from 'express'
import FetchProfile from '../linkedin/fetch-profile'
import cors from 'cors'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello World!')
})

const api = express.Router()

api.get('/fetch-profile/:userid', async (req, res) => {
	const id = req.params.userid

	const startTime = Date.now()
	const profile = await FetchProfile(id)
	if (!profile)
		return res
			.status(404)
			.json({ success: false, error: 'Profile not found', elapsedMs: Date.now() - startTime })

	res.json({ success: true, profile, elapsedMs: Date.now() - startTime })
})

app.use('/api', api)
app.use(cors())

export default app
