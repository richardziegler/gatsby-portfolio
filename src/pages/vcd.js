import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { headData } from '../mock/data'

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    display: 'flex',
    width: '30%',
    marginTop: '1em',
    marginBottom: '1em',
  },
  root: {
    background: 'linear-gradient(45deg, #4589ff 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  card: {
    maxWidth: '50%',
    marginBottom: '1em',
    textAlign: 'center'
  },
})

export default () => {
  const { title, lang, description } = headData
  const classes = useStyles()
  const [topics, setTopics] = useState([])
  const [topic, setTopic] = React.useState('')
  const handleChange = (event) => {
    setTopic(event.target.value)
  }

  const shuffleArray = () => {
    for (let i = topics.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[topics[i], topics[j]] = [topics[j], topics[i]]
    }
    setTopics([...topics])
  }

  const renderList = (topic, index) => {
    return (
      <Card key={index} className={classes.card}>
        <ListItem>
          <ListItemText primary={topic} secondary={index} />
        </ListItem>
      </Card>
    )
  }

  // useEffect(() => {
  //     renderList()
  // }), [topics]

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title || 'Secret Test Page'}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description || 'Secret Test Page'} />

      <CssBaseline style={{background: 'url("https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg")'}} />
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          component="div"
          style={{height: '10vh', marginTop: '1em' }}
        >
          Welcome to the VCD Page!
        </Typography>
        <div className={classes.flex}>
          <TextField
            className={classes.input}
            value={topic}
            onChange={handleChange}
            id="filled-basic"
            label="VCD Topic"
            variant="filled"
          />
        </div>
        <Button
          className={classes.root}
          variant="outlined"
          size="small"
          disabled={topic === ''}
          onClick={() => setTopics([...topics, topic])}
        >
          Click to Add to List!
        </Button>

        <List style={{marginLeft: '33%', marginTop: '1em'}}>
          {topics.map((topic, index) => (
            <Card key={index} className={classes.card}>
              <ListItem style={{textAlign: 'center'}}>
                <ListItemText primary={topic} />
              </ListItem>
            </Card>
          ))}
        </List>
        <Button
          className={classes.root}
          variant="outlined"
          size="small"
          onClick={() => shuffleArray()}
        >
          Shuffle List!
        </Button>
      </Container>
    </>
  )
}
