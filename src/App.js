import {React, useEffect} from 'react'
import MainPage from './Layouts/MainPage';

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);

  return (
   <MainPage />
  )
}

export default App
