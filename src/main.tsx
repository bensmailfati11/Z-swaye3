import { createRoot } from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
)
