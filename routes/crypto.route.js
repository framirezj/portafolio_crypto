import express from 'express'
import { getTotalValue } from '../services/getTotal.service.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Hola desde Crypto' })
})


/*
{
	"portfolio": {
		"BTC": 0.5,
		"ETH": 2.0,
		"USDT": 1000
	},
	"fiat_currency": "CLP"
}
*/

router.post('/', async (req, res) => {
    try {

        const { portfolio, fiat_currency } = req.body

        const total = await getTotalValue(portfolio, fiat_currency)

        res.status(200).json({
            total: total,
            currency: fiat_currency
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }


})


export default router

