import React from 'react'
import ReactDOM from 'react-dom/client'
import Demo from './demo/Demo'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
   <React.StrictMode>
      <Demo />
   </React.StrictMode>
)
