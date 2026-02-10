import express  from "express"
import type { Request, Response, NextFunction, Application } from "express"

const app: Application = express()
const PORT: number = 3000

declare global {
    namespace Express {
        interface Request {
            userName?: string
        }
    }
}

const upperCaseName = (req: Request, res: Response, next: NextFunction) => {
    const rawName = req.query.name

    if (rawName) {
        req.userName = (rawName as string).toUpperCase()
    } else {
        req.userName = "ANONYME"
    }

    next()
}

app.get('/hello', upperCaseName, (req: Request, res: Response) => {
    res.send(`Bonjour ${req.userName}`)
})

app.listen(PORT, () => {
    console.log(`✅ Serveur Backend lancé sur : http://localhost:${PORT}`);    
})