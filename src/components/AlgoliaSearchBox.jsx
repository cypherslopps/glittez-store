import algoliasearch from 'algoliasearch/lite';
import {
  Configure,
  Hits,
  InstantSearch,
  Pagination,
} from 'react-instantsearch';
import { Autocomplete } from '@/components/Autocomplete';
import { Hit } from '@/components/Hit';
import {
  INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES,
  INSTANT_SEARCH_INDEX_NAME,
} from '@/lib/constants';
import { Panel } from '../widgets/Panel';

const searchClient = algoliasearch(import.meta.env.VITE_ANGOLIA_APPLICATION_ID, import.meta.env.VITE_ANGOLIA_SEARCH_API_KEY);

const AlgoliaSearchBox = () => {
  return (
    <div className='relative h-[85vh] w-full overflow-y-scroll'>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        routing
        >
          <header className="header">
            <Autocomplete
              searchClient={searchClient}
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
            />
          </header>

          <Configure
            attributesToSnippet={['name:7', 'description:35']}
            snippetEllipsisText="…"
          />
          <div className="mt-[3.5rem] px-[1rem]">
              <Hits 
                hitComponent={Hit}
                className="overflow-hidden"
              />
                <Pagination />
          </div>
      </InstantSearch>
    </div>
  )
}

export default AlgoliaSearchBox