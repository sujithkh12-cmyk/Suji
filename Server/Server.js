import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configaretion/connectDb.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./Inngest/Index.js"

const app = express()
const port = process.env.PORT || 3000

await connectDb()

//middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//Api Router
app.get('/', (req, res) => res.send('Server is Live!'))
app.use('/api/inngest', serve({ client: inngest, functions }))

// Only listen locally — Vercel invokes the exported app directly
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`Server listning at http://localhost:${port}`))
}

export default app
