import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { UserContextProvider } from './components/context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      {' '}
      <ThemeContextProvider>
        {' '}
        <App />
      </ThemeContextProvider>
    </UserContextProvider>
  </React.StrictMode>
)
