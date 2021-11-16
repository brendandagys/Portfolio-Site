import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import '../css/transitions.css'

import {
  Grid,
  Typography,
  Button,
  Theme,
  FormControl,
  Box,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  FormHelperText,
  Alert,
  AlertTitle,
  Collapse,
} from '@mui/material'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import MyTextField from './MyTextField'
import useFocus from '../hooks/useFocus'
import useLocalStorage from '../hooks/useLocalStorage'

type apiData = {
  game_id: string
  game_over: boolean
  word_letters_revealed: string
  num_words_to_play: string
  words_used: string[]
  current_word_number: string
  definition: string
  score: number
}

const StyledGridItem = styled(Grid)`
  border: 1px solid;
  border-radius: 10px;
  padding: 4px;
  background-color: ${({ theme }) =>
    theme.palette.colorMode.vocabularyBannerBackgroundColor};
`

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://vocabulary.brendandagys.com'
    : 'http://localhost:5000'

const VocabularyTrainer = ({ theme }: { theme: Theme }) => {
  const [guessTextFieldRef, setGuessTextFieldFocus] = useFocus()

  const [gameId, setGameId] = useLocalStorage('gameId', '')
  const [apiData, setApiData] = useState<apiData>()
  const [guess, setGuess] = useState('')
  const [numWordsToPlay, setNumWordsToPlay] = useState('3')
  const [scoreColor, setScoreColor] = useState('')

  const obtainStatus = useCallback(async () => {
    // Will either return a found Game object, or a string `game_id` (if `num_words_to_play` isn't provided)

    // Only execute if there's no `gameId` or we still haven't chosen the number of words to play
    const { data }: { data: apiData | string } = await axios.post(
      '/api',
      { game_id: gameId },
      {
        baseURL,
      }
    )

    if (typeof data === 'string') {
      setGameId(data)
    } else {
      setApiData(data)
      setGuess(data.word_letters_revealed)
    }
  }, [gameId, setGameId])

  const startNewGame = async () => {
    const { data }: { data: apiData } = await axios.post(
      '/api',
      { game_id: gameId, num_words_to_play: numWordsToPlay },
      {
        baseURL,
      }
    )

    setApiData(data)
    setGameId(data.game_id)
    setGuessTextFieldFocus()
  }

  const makeGuess = async (guess: string) => {
    const previousScore = apiData?.score
    // console.log(previousScore)

    const { data }: { data: apiData } = await axios.post(
      '/api',
      { game_id: gameId, guess },
      {
        baseURL,
      }
    )

    // console.log(data)

    // Green animation when a correct guess is made
    if (previousScore !== undefined && data.score > previousScore) {
      setScoreColor('green')

      setTimeout(() => {
        setScoreColor('')
      }, 2500)
    }

    // Store in state
    setApiData(data)

    // console.log(apiData)

    setGuess(data.word_letters_revealed ? data.word_letters_revealed : '')

    setGuessTextFieldFocus()
  }

  useEffect(() => {
    if (gameId === '' || !apiData) {
      obtainStatus()
    }
  }, [obtainStatus, gameId, apiData])

  const gameInterface = (
    <>
      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid item container justifyContent='center' xs={8}>
        <StyledGridItem item xs={5} sx={{ mx: 'auto', mb: 'auto' }}>
          <Typography variant='h5' align='center'>
            Current word
          </Typography>
          <Typography align='center'>
            {apiData?.current_word_number
              ? `${apiData.current_word_number} / ${apiData.num_words_to_play}`
              : 'N/A'}
          </Typography>
        </StyledGridItem>
        <StyledGridItem
          item
          xs={5}
          sx={{
            mx: 'auto',
            mb: 'auto',
            color: scoreColor,
            transition: 'all .45s ease-in',
            WebkitTransition: 'all .45s ease-in',
          }}
        >
          <Typography variant='h5' align='center'>
            Score
          </Typography>
          <Typography align='center'>
            {apiData?.score === undefined ? 'N/A' : apiData.score}
          </Typography>
        </StyledGridItem>
        <Collapse in={apiData?.game_over}>
          <Alert
            variant='outlined'
            severity='info'
            sx={{ mt: 4, mx: 2, mb: 'auto' }}
          >
            <AlertTitle>GAME OVER</AlertTitle>
            You have guessed on all {apiData?.num_words_to_play} words —{' '}
            <strong>Thanks very much for playing!</strong>
          </Alert>
        </Collapse>
        {apiData?.game_over ? null : (
          <>
            <Grid item xs={12} mt={4} mx={1}>
              <Typography variant='h5' align='center'>
                Definition
              </Typography>
              <Typography align='center'>
                {apiData?.definition ? apiData.definition : 'N/A'}
              </Typography>
            </Grid>
            <Grid item textAlign='center' xs={12} mt={2}>
              <Box
                component='form'
                onSubmit={(e: React.SyntheticEvent) => {
                  e.preventDefault()
                  makeGuess(guess)
                }}
              >
                <FormControl>
                  <div style={{ margin: '15px 0' }}>
                    <MyTextField
                      ref={guessTextFieldRef}
                      autoFocus
                      required={true}
                      name='guess'
                      variant='outlined'
                      helperText='What is the word?...'
                      value={guess}
                      onChange={(e: React.BaseSyntheticEvent) =>
                        setGuess(e.target.value)
                      }
                    />
                  </div>
                  <Button
                    type='submit'
                    color='success'
                    variant='contained'
                    sx={{ m: '10px' }}
                  >
                    Guess
                  </Button>
                  <Button
                    variant='contained'
                    size='small'
                    color='secondary'
                    onClick={(e) => {
                      makeGuess('=')
                    }}
                    sx={{
                      m: '10px',
                    }}
                  >
                    Hint
                  </Button>
                </FormControl>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
      <Grid item container justifyContent='center' xs={4}>
        <StyledGridItem item xs={12}>
          <Typography variant='h5' align='center'>
            Words seen:
          </Typography>
          {apiData?.words_used ? (
            <TransitionGroup className='words-used-list'>
              {apiData.words_used.map((word, index) => (
                <CSSTransition key={index} timeout={300} classNames='word'>
                  <Typography align='center' variant='subtitle1'>
                    {word}
                  </Typography>
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : null}
        </StyledGridItem>
      </Grid>
      <Grid item textAlign='left' xs={12} mt={3}>
        <Divider />
        <div style={{ marginTop: '8px' }}>
          <Typography
            variant='overline'
            sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}
          >
            API data received:
          </Typography>
        </div>
        <Typography>
          <small>
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(apiData, null, 2)}
            </pre>
          </small>
        </Typography>
      </Grid>
    </>
  )

  return (
    <Grid container justifyContent='center' textAlign='center' xs={12}>
      {gameId ? (
        <Grid item xs={12} sx={{ mt: -1 }}>
          <FormControl sx={{ m: 1, mt: 3 }}>
            <InputLabel id='num-words-select-label'>Words</InputLabel>
            <Select
              size='small'
              labelId='num-words-select-label'
              id='num-words-select'
              value={numWordsToPlay}
              label='Words'
              onChange={(e: SelectChangeEvent) => {
                setNumWordsToPlay(e.target.value)
              }}
            >
              {/* <MenuItem value=''></MenuItem> */}
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
            <FormHelperText>How many words to guess?</FormHelperText>
            <Button
              sx={{ mt: 3, mb: 1 }}
              variant='contained'
              onClick={startNewGame}
            >
              Start New Game
            </Button>
          </FormControl>
        </Grid>
      ) : (
        <Alert severity='warning'>The API is not currently running.</Alert>
      )}

      {apiData?.num_words_to_play ? gameInterface : null}
    </Grid>
  )
}

export default VocabularyTrainer
