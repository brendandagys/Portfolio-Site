import axios from './axios'
import { useEffect } from 'react'

const App = (): JSX.Element => {
  const checkHealth = async () => {
    const { data: healthStatus } = await axios.get('/api/health')
    console.log(healthStatus)
    console.log('Hello')
  }

  useEffect(() => {
    checkHealth()
  }, [])

  return <h1>Brendan Dagys</h1>
}

export default App
