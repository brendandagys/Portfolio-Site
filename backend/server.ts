import express, { Request, Response } from 'express'

import contactRoutes from './routes/contactRoutes'

import dotenv from 'dotenv'
dotenv.config({ path: __dirname + (process.env.ENVPATH ?? '/../.env') })

const PORT = process.env.PORT ?? 80

const app = express()

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': 'https://brendandagys.com',
    Vary: 'Origin',
  })
  next()
})

app.use(express.json())

app.get('/api/health', (req: Request, res: Response) => {
  res.send('API server for site is healthy!')
})

app.use('/api/contact', contactRoutes)

app.get('*', (req: Request, res: Response) => {
  res.send(
    `API server for site running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
})

app.listen(PORT, () =>
  console.log(
    `API server for site running in ${process.env.NODE_ENV} on port ${PORT}...`
  )
)

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
