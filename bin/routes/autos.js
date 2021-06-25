let express = require('express')
//const router = require('./home')
let router = express.Router()

router.get ('/', (req,res)=> {
    res.send("listado de autos")
})

/*Marca 
router.get ('/marca/:marca',(req,res)=>{
    let m = req.params.marca
    res.send(`Autos de la marca ${m}`)
})

//Autos por color 
router.get ('/color/:color',(req,res)=>{
    let c = req.params.color
    res.send(`Autos color ${c}`)
})
router.get ('/modelo/:modelo/:anio?',(req,res)=>{
    let m = req.params.modelo;
    let a = req.params.anio;
    res.send(`Autos modelo ${m} del Año ${a}`)
})*/


module.exporta = router
