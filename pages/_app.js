import { Container } from '@material-ui/core'
import Header from '../components/layout/Header'

import classes from '../styles/Common.module.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default App
