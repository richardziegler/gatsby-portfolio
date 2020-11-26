import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/main.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Card from '@material-ui/core/Card'
import { headData } from '../mock/data'

export default () => {
  const { title, lang, description } = headData

  const [topics, setTopics] = useState([1, 2, 3, 4])
  const [name, setName] = React.useState('Cat in the Hat')
  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Secret Test Page'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Secret Test Page'} />
      </Helmet>
      <TextField
        value={name}
        onChange={handleChange}
        id="filled-basic"
        label="Topic"
        variant="filled"
      />
      <Button variant="outlined" size="small" onClick={() => setTopics([...topics, name])}>
        Click Me!
      </Button>

      <List>
        {topics.map((topic) => (
          <Card>
            <ListItem>
              <ListItemText primary={topic} />
            </ListItem>
          </Card>
        ))}
      </List>
    </>
  )
}
