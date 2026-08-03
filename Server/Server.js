import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configaretion/connectDb.js'
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/Index.js"
const app = express()
const port = 3000
await connectDb()

//middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())
//Api Router
app.get('/', (req, res) => res.send('Server is Live!'))
app.use('/api/inngest', serve({ client: inngest, functions }))
app.listen(port, () => console.log(`Server listning at http://localhost:${port}`))
