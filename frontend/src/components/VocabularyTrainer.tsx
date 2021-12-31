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
    : 'http://localhost:5004'

const VocabularyTrainer = ({ theme }: { theme: Theme }) => {
  const [guessTextFieldRef, setGuessTextFieldFocus] = useFocus()

  const [gameId, setGameId] = useLocalStorage('gameId', '')
  const [apiData, setApiData] = useState<apiData>()
  const [guess, setGuess] = useState('')
  const [numWordsToPlay, setNumWordsToPlay] = useState('3')
  const [scoreColor, setScoreColor] = useState('')
  const [initialGameStarted, setInitialGameStarted] = useState(false)
  const [initialIdFetchFlag, setInitialIdFetchFlag] = useState(false)

  const getGameId = useCallback(async () => {
    const { data }: { data: string } = await axios.get('/api/get-game-id', {
      baseURL,
    })

    setGameId(data)

    return data
  }, [setGameId])

  const checkIfGameIsStarted = useCallback(async () => {
    try {
      const { data }: { data: boolean } = await axios.post(
        '/api/check-if-game-is-started',
        { game_id: gameId },
        {
          baseURL,
        }
      )

      if (data === true) setInitialGameStarted(true)

      // console.log(data)
    } catch (e) {
      await getGameId()
    }
  }, [gameId, setInitialGameStarted, getGameId])

  // Called only for possible local-storage `game_id` if `initialGameStarted` is `true`
  const getGame = useCallback(async () => {
    const { data }: { data: apiData } = await axios.post(
      '/api/get-game',
      { game_id: gameId },
      {
        baseURL,
      }
    )

    setApiData(data)
    setGuess(data.word_letters_revealed ? data.word_letters_revealed : '')
  }, [gameId, setApiData])

  useEffect(() => {
    if (gameId === '' && !initialIdFetchFlag) {
      setInitialIdFetchFlag(true)
      getGameId()
      // Else if we have an existing `game_id` and don't know if it's started...
      // May set `initialGameStarted` which would call `getGame()`
      // If game not started, either way we end up with  `game_id`
    } else if (!initialGameStarted && !initialIdFetchFlag) {
      checkIfGameIsStarted()
    }
  }, [
    gameId,
    getGameId,
    initialGameStarted,
    checkIfGameIsStarted,
    initialIdFetchFlag,
  ])

  useEffect(() => {
    if (initialGameStarted) getGame()
  }, [initialGameStarted, getGame])

  const startGame = async (gameId: string) => {
    console.log('Started Game', gameId)
    const { data }: { data: apiData } = await axios.post(
      '/api/start-game',
      { game_id: gameId, num_words_to_play: numWordsToPlay },
      {
        baseURL,
      }
    )

    setApiData(data)
    setGuessTextFieldFocus()
  }

  const makeGuess = async (guess: string) => {
    const previousScore = apiData?.score

    const { data }: { data: apiData } = await axios.post(
      '/api/make-guess',
      { game_id: gameId, guess },
      {
        baseURL,
      }
    )

    // Green animation when a correct guess is made
    if (previousScore !== undefined && data.score > previousScore) {
      setScoreColor('green')

      setTimeout(() => {
        setScoreColor('')
      }, 2500)
    }

    setApiData(data)
    setGuess(data.word_letters_revealed ? data.word_letters_revealed : '')
    setGuessTextFieldFocus()
  }

  const gameInterface = (
    <>
      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
      </Grid>
      <Grid item container justifyContent='center' xs={8}>
        <StyledGridItem item xs={5} sx={{ mx: 'auto', mb: 'auto' }}>
          <Typography align='center' sx={{ fontWeight: '900' }}>
            Word #
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
          <Typography align='center' sx={{ fontWeight: '900' }}>
            Score
          </Typography>
          <Typography align='center'>
            {apiData?.score === undefined ? 'N/A' : apiData.score}
          </Typography>
        </StyledGridItem>
        <Collapse in={apiData?.game_over}>
          <Alert
            variant='outlined'
            // severity='success'
            icon={false}
            sx={{
              mt: 4,
              mx: 2,
              mb: 'auto',
              color: '#0CAC13',
              fontSize: '0.8rem',
            }}
          >
            <AlertTitle>GAME OVER</AlertTitle>
            You have guessed on all {apiData?.num_words_to_play} words —{' '}
            <strong>Thanks very much for playing!</strong>
          </Alert>
        </Collapse>
        {apiData?.game_over ? null : (
          <>
            <Grid item xs={12} mt={4} mx={1}>
              <Typography
                variant='h6'
                align='center'
                sx={{ fontWeight: '900' }}
              >
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
                  <div style={{ margin: '15px 8px' }}>
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
          <Typography align='center' sx={{ mb: 1, fontWeight: '900' }}>
            Words seen
          </Typography>
          {apiData?.words_used ? (
            <TransitionGroup className='words-used-list'>
              {apiData.words_used.map((word, index) => (
                <CSSTransition key={index} timeout={300} classNames='word'>
                  <Typography align='center' style={{ fontSize: '0.8rem' }}>
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
        <pre style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
          {JSON.stringify(apiData, null, 2)}
        </pre>
      </Grid>
    </>
  )

  return (
    <Grid container justifyContent='center' textAlign='center'>
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
            <MenuItem value={'1'}>1</MenuItem>
            <MenuItem value={'2'}>2</MenuItem>
            <MenuItem value={'3'}>3</MenuItem>
            <MenuItem value={'4'}>4</MenuItem>
            <MenuItem value={'5'}>5</MenuItem>
            <MenuItem value={'10'}>10</MenuItem>
            <MenuItem value={'15'}>15</MenuItem>
            <MenuItem value={'20'}>20</MenuItem>
            <MenuItem value={'25'}>25</MenuItem>
            <MenuItem value={'30'}>30</MenuItem>
            <MenuItem value={'40'}>40</MenuItem>
            <MenuItem value={'50'}>50</MenuItem>
          </Select>
          <FormHelperText>How many words to guess?</FormHelperText>
          <Button
            sx={{ mt: 3, mb: 1 }}
            variant='contained'
            onClick={async () => {
              if (apiData) {
                const newGameId = await getGameId()
                await startGame(newGameId)
              } else {
                await startGame(gameId)
              }
            }}
          >
            Start New Game
          </Button>
        </FormControl>
      </Grid>

      {apiData ? gameInterface : null}
    </Grid>
  )
}

export default VocabularyTrainer
