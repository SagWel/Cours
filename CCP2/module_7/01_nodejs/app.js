import express from 'express';
import * as path from 'path';
import cors from 'cors'

const app = express()
const PORT = 3000;
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'front/index.html'))
})

app.get('/test', (req, res) => {
    console.log(req);
    res.send('Hello test!!!')    
})

app.get('/json', (req, res) => {
    const data = {
        "username": "Moi",
        "password": "MyP@$$W0rd!"
    }
    res.json(data)
})

app.listen(3000, () => {
    console.log(`Serveur, ok ! sur l'url : http://localhost:${PORT}`);
})