import React from 'react'
import Navbar from './components/navabr/Navbar'
import { ThemeProvider } from '@emotion/react'
import { darkTheme } from './theme/darkTheme'
import { CssBaseline } from '@mui/material'
import Home from './components/home/Home'
import RestaurantDetail from './components/restaurant/RestaurantDetail'

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      <RestaurantDetail/>
    </ThemeProvider>
  )
}

export default App
