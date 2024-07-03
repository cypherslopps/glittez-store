import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Providers from './providers/Providers.jsx'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </Providers>,
)
