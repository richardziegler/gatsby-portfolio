import React, { useState } from 'react'
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
    maxWidth: '25%',
    marginBottom: '1em',
  },
})

export default () => {
  const { title, lang, description } = headData
  const classes = useStyles()
  const [topics, setTopics] = useState([1, 2, 3, 4])
  const [name, setName] = React.useState('Cat in the Hat')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <meta charSet="utf-8" />
      <title>{title || 'Secret Test Page'}</title>
      <html lang={lang || 'en'} />
      <meta name="description" content={description || 'Secret Test Page'} />

      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
        <TextField
          value={name}
          onChange={handleChange}
          id="filled-basic"
          label="Topic"
          variant="filled"
        />
        <Button
          className={classes.root}
          variant="outlined"
          size="small"
          onClick={() => setTopics([...topics, name])}
        >
          Click Me!
        </Button>

        <List>
          {topics.map((topic) => (
            <Card className={classes.card}>
              <ListItem>
                <ListItemText primary={topic} />
              </ListItem>
            </Card>
          ))}
        </List>
      </Container>
    </>
  )
}
