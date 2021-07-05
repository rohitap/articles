import { useState } from 'react';
import { useRouter } from 'next/router'

import {Tabs,Tab, AppBar} from '@material-ui/core'
import useStyles from './styles'
import { route } from 'next/dist/next-server/server/router';


const NavHeader = () => {
  const [tab, setTab] = useState(0)
  const classes = useStyles()
  const router = useRouter()

  // const handleTabChange = () => router.push('/articles')
  const handleTabChange = (event, newValue) => {
    setTab(newValue)
    newValue === 0 ? router.push('/article') : router.push('/form')
  }
  return (
    <AppBar position="static" className={classes.appBar}>
    <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
      <Tab label="Articles"/>
      <Tab label="Publish Article"/>
    </Tabs>
  </AppBar>  
  )
}

export default NavHeader