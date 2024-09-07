import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';
import App from './App.jsx'
import './index.css'
import Providers from './providers/Providers.jsx'
import { HelmetProvider } from 'react-helmet-async'

const searchClient = algoliasearch(import.meta.env.VITE_ANGOLIA_APPLICATION_ID, import.meta.env.VITE_ANGOLIA_SEARCH_API_KEY);
const index = searchClient.initIndex('glittez_search');

// index.setSettings({
//   searchableAttributes: ['name', 'description', 'size', 'color', 'price'],
//   ranking: ['typo', 'geo', 'words', 'filters', 'proximity', 'attribute', 'exact', 'custom']
// });
console.log(index);



ReactDOM.createRoot(document.getElementById('root')).render(
  <InstantSearch searchClient={searchClient} indexName="glittez_search" insights={true}>
    <Providers>
      <HelmetProvider>
        <Router>
          <App />
        </Router>
      </HelmetProvider>
    </Providers>
  </InstantSearch>,
)
