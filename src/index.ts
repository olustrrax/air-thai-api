import express from "express"
import bodyParser from "body-parser"
import FindStation from "./findpm"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set("port", process.env.port || 5500)

app.get('*', (req, res) => {
  return res.send('dev yu kaaaa, calm down')
})

app.post('/findpm', async ( req, res ) => {
  const { body } = req
  const data = await FindStation(body)
	return res.json(data)
})

app.listen(app.get('port'), function() {
	console.log("🚀 Server ready ~~~~")
})