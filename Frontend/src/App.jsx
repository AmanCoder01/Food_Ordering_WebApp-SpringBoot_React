import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
// import { darkTheme } from './theme/darkTheme'
import { createTheme, CssBaseline } from '@mui/material'

import CustomerRouter from './components/routes/CustomerRouter'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from './redux/auththentication/action'

const App = () => {


  const [mode, setMode] = useState("light");

  console.log(mode);
  

  const theme = createTheme({
    palette: {
      mode: mode, 
    },
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { auth } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUserData(auth.jwt || jwt));
  }, [auth.jwt])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomerRouter mode={mode} setMode={setMode} />
    </ThemeProvider>
  )
}

export default App
