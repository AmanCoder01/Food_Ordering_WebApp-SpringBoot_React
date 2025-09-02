import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import CustomerRouter from './components/routes/CustomerRouter'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from './redux/authSlice'
import { getAllRestaurants } from './redux/resturantSlice'
import  { generateTheme } from './theme/generateTheme'

const App = () => {



  // const theme = createTheme({
  //   palette: {
  //     mode: mode,
  //   },
  // });

  const { mode } = useSelector((state) => state.theme);
  const {  jwt } = useSelector((state) => state.auth);

  const theme = generateTheme(mode);



  const dispatch = useDispatch();

  // 🔹 Get auth state from Redux

  useEffect(() => {
    dispatch(getUserData(jwt));
    dispatch(getAllRestaurants(jwt))
  }, [jwt])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomerRouter />
    </ThemeProvider>
  )
}

export default App
