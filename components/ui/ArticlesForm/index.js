import { useState } from 'react'
import { Container, Button, Grid, TextField } from '@material-ui/core'

import ApiClient from '../../../utils/axios'
import useAsync from '../../../hooks/useAsync'
import useStyles from './styles'



const ArticlesForm = () => {
  const classes = useStyles()

  const [formFields, setFormFields] = useState({
    title: null,
    author: null,
    intro: null,
    date: null,
  })

  const { isLoading, err, res, asyncFunc: addArticle } = useAsync(ApiClient.addArticles)

  const handleFieldValueChange = field => event => setFormFields({ ...formFields, [field]: event.target.value})

  const onSubmit = (e) => {
    e.preventDefault()
    addArticle(formFields)
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.formHeading}><h1> Add Your Article</h1></div>
      <Container className={classes.formGrid} >
        <Grid spacing={3} justify="space-between" container>
          <Grid item xs={6} sm={6}>
          <TextField
            onChange={handleFieldValueChange('title')}
              id="title"
              label="Title"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} sm={6}>
          <TextField
            onChange={handleFieldValueChange('author')}
              id="authorEmail"
              label="Author Email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
          <TextField
            onChange={handleFieldValueChange('intro')}
              id="introText"
              label="Intros text"
              multiline
              fullWidth
              rowsMax={2}
              inputProps={{
                maxLength: 255
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              onChange={handleFieldValueChange('date')} 
              label="Date" 
              type='date' 
              InputLabelProps={{ shrink: true }} 
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <div>
          <Button className={classes.submitBtn} color='primary' variant='contained' type='submit'> Save Your Article </Button>
        </div>
      </Container>
    </form>
  )
}

export default ArticlesForm