import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Components/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
    <App />
    </ThemeProvider>
)

