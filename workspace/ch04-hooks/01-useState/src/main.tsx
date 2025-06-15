import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import PApp from './PApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <PApp />
  </StrictMode>,
)
