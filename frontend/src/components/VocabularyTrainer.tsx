import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { Grid, Typography, Button, Theme } from '@mui/material'

import MyTextField from './MyTextField'

type apiData = {
  game_over: string
  word_letters_revealed: string
  num_words_to_play: string
  words_used: string
  current_word_number: string
  definition: string
  score: string
}

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://vocabulary.brendandagys.com'
    : 'http://localhost:5000'

const VocabularyTrainer = ({ theme }: { theme: Theme }) => {
  const [clientId, setClientId] = useState('12345')
  const [apiData, setApiData] = useState<apiData | undefined>()
  const [guess, setGuess] = useState('')

  const getApiData = async () => {
    const { data }: { data: apiData } = await axios.get('/api', {
      baseURL,
    })

    setApiData(data)
  }

  const startNewGame = async () => {
    const { data }: { data: apiData } = await axios.post(
      '/api',
      { client_id: clientId, num_words_to_play: 3 },
      {
        baseURL,
      }
    )

    setApiData(data)
  }
  const makeGuess = async () => {
    const { data }: { data: apiData } = await axios.post(
      '/api',
      { client_id: clientId, guess },
      {
        baseURL,
      }
    )

    setApiData(data)
  }

  useEffect(() => {
    setClientId('1234567')
    getApiData()
  }, [])

  return (
    <Grid container xs={12} justifyContent='center'>
      <Grid item textAlign='center' xs={12}>
        <Button variant='contained' onClick={startNewGame}>
          Start New Game
        </Button>
      </Grid>
      <Grid item xs={12} mt={3} pb={5}>
        <Typography>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        </Typography>
      </Grid>
      <Grid container alignItems='center' justifyContent='center' xs={8}>
        <Grid item xs={6}>
          <Typography variant='h5' align='center'>
            Word
          </Typography>
          <Typography align='center'>
            {apiData?.current_word_number ? apiData.current_word_number : 'N/A'}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' align='center'>
            Score
          </Typography>
          <Typography align='center'>
            {apiData?.score ? apiData.score : 'N/A'}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography variant='h5' align='center'>
            Definition
          </Typography>
          <Typography align='center'>
            {apiData?.score ? apiData.score : 'N/A'}
          </Typography>
        </Grid>
        <Grid item textAlign='center' xs={12} mt={4}>
          <div style={{ margin: '15px 0' }}>
            <MyTextField
              variant='outlined'
              helperText='What is the word?...'
              value={guess}
              onChange={(e: React.BaseSyntheticEvent) =>
                setGuess(e.target.value)
              }
            />
          </div>
          <Button variant='contained' onClick={makeGuess} sx={{ mx: '5px' }}>
            Guess
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              setGuess('=')
              makeGuess()
            }}
            sx={{ mx: '5px' }}
          >
            Hint
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h5' align='center'>
          Words seen:
        </Typography>
        <Typography align='center'>
          {apiData?.words_used ? apiData.words_used : 'N/A'}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default VocabularyTrainer
