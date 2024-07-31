//montar server en puerto 3000

const express = require ('express')
const app = express();
const port = 3000
app.get('/', (req, res)=>{
    res.send('he recibido una peticion get, alguien solicita datos')
}
)
app.post('/', (req, res)=>{
    res.send('he recibido una peticion post, envio info para que el servidor procese')
}
)
app.put('/actualizar', (req, res)=>{
    res.send('he recibido una peticion put, actualizando info')
}
)
app.patch('/', (req, res)=>{
    res.send('he recibido una peticion patch, metodos para analizar info existente')
}
)
app.delete('/', (req, res)=>{
    res.send('he recibido una peticion delete, pido al servidor que elimine datos')
}
)
app.listen(3000, ()=>{
    console.log(`servidor corriendo en el puerto ${port}`)
}
)