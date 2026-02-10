import express from "express"
import type { Request, Response, Application} from "express"
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app: Application = express()
const PORT: number = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req: Request, res:Response) => {
    res.sendFile('/index.html')
})

app.get('/services', (req: Request, res: Response) => {
    res.send(`<h1>Nos Services</h1>
        <p>Développement Web, Design, et SEO.</p>`)
})

app.get('/actualites', (req: Request, res: Response) => {
    res.json({
        derniere_actu: "Node.js est génial !",
        date: "05/02/2026"
    })
})

app.get('/contact', (req: Request, res: Response) => {
    res.send(`<h1>Contact</h1>
        <p>Formulaire de contact en maintenance ...</p>`)
})

app.get('/test-text', (req: Request, res:Response) => {
    res.send(`<span>Hey ! <strong>Nicolas</strong> ! Bienvenu ! </span>`)
})

app.get('/test-data', (req:Request, res:Response) => {
    res.json({
        first: "TypeScript",
        second: "PHP",
        third: "node.js"
    })
})

app.get('/test-page',(req: Request, res: Response) => {
    res.redirect('/test-page.html')
})

app.listen(PORT, () => {
    console.log(`Serveur prêt sur http://localhost:${PORT}`);    
})