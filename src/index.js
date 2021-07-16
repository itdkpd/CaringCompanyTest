import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/lib/fonts/fontAwesome.min.css'
import './assets/stylesheets/main/main.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootElement,
)
