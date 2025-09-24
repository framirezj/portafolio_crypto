import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Hola desde Crypto'})
})

router.post('/', async (req, res) => {
    try {
        
        res.json({monto_fake: "$muuuuucho dinero"})
        
    } catch (error) {
        console.error("Error al obtener el total del portafolio", error)
        res.status(500).json({error_message: "No se pudo obtener la información"})
    }
    
    
})


export default router

