import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: '20px'
  },
  tabsContainer: {
    maxWidth: '50%',
    margin: 'auto',
  },
  form: {
    outline: 'thick auto black',
    padding: '24px',
    overFlow: 'auto'
  },
  formGrid: {
    marginTop: '40px',
  },
  submitBtn: {
    float: 'right',
    margin: '20px'
  },
  formHeading: {
    textAlign: 'center',
  }
}))

export default useStyles