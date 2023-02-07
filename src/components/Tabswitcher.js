import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root:{
    flexFlow:1,
  },
  tab:{
    fontSize:12,
    color:"#5f6368",
    textTransform:"capitalize",
    height:10,
    fontWeight:"600",
  },
  tabs:{
    height:10,
  }
})

function Tabswitcher() {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Tabs className={classes.tabs} textColor='primary' indicatorColor='primary' centered>
        <Tab label="Questions" className={classes.tab}>

        </Tab>
        <Tab label="Responses" className={classes.tab}>
          
          </Tab>
      </Tabs>
    </Paper>
  )
}

export default Tabswitcher