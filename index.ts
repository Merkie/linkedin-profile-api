import app from './src/server'

app.listen(process.env.PORT, () => {
	console.log(`LinkedIn Profile API listening on port ${process.env.PORT}...`)
})
