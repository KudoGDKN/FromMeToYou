import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Webpage from './route/web-page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Webpage></Webpage>  
  </StrictMode>,
)
