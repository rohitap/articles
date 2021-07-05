import { useState } from 'react';
import { useRouter } from 'next/router'

import { Tabs,Tab, AppBar } from '@material-ui/core'
import useStyles from './styles'


const NavHeader = () => {
  const [tab, setTab] = useState(0)
  const classes = useStyles()
  const router = useRouter()

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
    newValue === 0 ? router.push('/article') : router.push('/add-article')
  }
  return (
    <AppBar position="static" className={classes.appBar}>
      <div className={classes.tabsContainer}>
    <Tabs value={tab} onChange={handleTabChange} aria-label="simple tabs example">
      <Tab label="Articles"/>
      <Tab label="Publish Article"/>
    </Tabs>
    </div>
  </AppBar>  
  )
}

export default NavHeader