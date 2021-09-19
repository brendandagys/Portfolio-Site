import express from 'express'
import { Request, Response } from 'express'

import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + (process.env.ENVPATH ?? '/../.env') })

const app = express()

app.use(express.json())

app.get('/api/health', (req: Request, res: Response) => {
  res.send('Healthy!')
})

// if (process.env.NODE_ENV === 'production') {
//   // Express will serve production assets like our main.js or main.css file
//   app.use(express.static(path.join(process.cwd(), '..', 'frontend', 'build')))

//   // Express will serve up the index.html file if it doesn't recognize the route
//   app.get('*', (req: Request, res: Response) => {
//     res.sendFile(
//       path.resolve(process.cwd(), '..', 'frontend', 'build', 'index.html')
//     )
//   })
// }

app.get('*', (req: Request, res: Response) => {
  res.send(`API server running in ${process.env.NODE_ENV}...`)
})

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () =>
  console.log(
    `API server running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
)
