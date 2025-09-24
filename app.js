import express from 'express'
import routerCrypto from './routes/crypto.route.js'

const app = express()

app.use(express.json())
app.use('/crypto', routerCrypto)

app.get('/', (req, res) => {
    res.status(200).json({message: 'hola'})
})

app.listen(3000, () => {
    console.log("Server On: http://localhost:3000")
})