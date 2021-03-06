import express, { Request, Response } from 'express'
import contactRoutes from './routes/contactRoutes'
import dotenv from 'dotenv'

dotenv.config({ path: __dirname + (process.env.ENVPATH ?? '/.env') })

const ORIGIN = process.env.ORIGIN ?? 'http://localhost:3000'
const PORT = process.env.PORT ?? 80

const app = express()

app.use((req, res, next) => {
  res.set({
    'Access-Control-Allow-Origin': ORIGIN,
    Vary: 'Origin',
  })
  next()
})

app.use(express.json())

app.use('/api/contact', contactRoutes)

app.use('/api/documents', (req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') console.log('DIRNAME:', __dirname)
  const pathSplit = req.originalUrl.split('/')
  const path = pathSplit[pathSplit.length - 1]
  const file = `${__dirname}/documents/${path}`

  res.sendFile(file)
})

app.get('/api/health', (req: Request, res: Response) => {
  res.send('API server for `brendandagys.com` is healthy!')
})

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
