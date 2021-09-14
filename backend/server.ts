import express from 'express'
import { Request, Response } from 'express'

import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/../.env' })

const app = express()

// app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets like our main.js or main.css file
  app.use(express.static(path.join(process.cwd(), '..', 'frontend', 'build')))

  // Express will serve up the index.html file if it doesn't recognize the route
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(process.cwd(), '..', 'frontend', 'build', 'index.html')
    )
  })
} else {
  app.get('/', (req: Request, res: Response) => {
    res.send('API server is running...')
  })

  app.get('/health', (req: Request, res: Response) => {
    res.send('Healthy!')
  })
}

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`)
)