import { SearchBox } from "react-instantsearch"

const InstantSearchBox = () => {
  return (
    <SearchBox classNames={{
        root: 'MyCustomSearchBox',
        form: 'MyCustomSearchBoxForm MyCustomSearchBoxForm--subclass',
      }} />
  )
}

export default InstantSearchBox