import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1003,
      xl: 1280,
      mssg: 1080,
    },
  },
});

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={user ? <Homepage /> : <Navigate to={"/login"} />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to={"/"} />} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to={"/"} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
