import {React, useEffect} from 'react'

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);

  return (
    <div className="">
      <h1 className="bg-white dark:bg-black">Test React and Tailwind</h1>
    </div>
  )
}

export default App
