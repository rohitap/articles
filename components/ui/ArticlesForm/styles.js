import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: '20px'
  },
  tabsContainer: {
    maxWidth: '50%',
    margin: 'auto',
  },
  formGrid: {
    outline: 'thick auto black',
    marginTop: '40px',
    padding: '24px',
  },
  submitBtn: {
    float: 'right',
    margin: '20px'
  }
}))

export default useStyles