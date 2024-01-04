import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom'
import App from './App'
import './styles.css'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <App />, document.getElementById('app')
)

//ReactDOM.render(<App />, document.getElementById('app'))
