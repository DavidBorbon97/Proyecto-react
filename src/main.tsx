import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TasksProvider } from './context/TasksContext'
import { ThemeProvider } from './context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
        <TasksProvider>
        <App/>
        </TasksProvider>
        </ThemeProvider>
    </React.StrictMode>
)