import { Snippet } from 'react-instantsearch';

export function Hit({ hit }) {
  return (
    <a href="#" className="block grid grid-cols-[5rem_1fr] items-center gap-x-3">
      <div className="w-full h-[5rem]">
        <img src={hit.sku[0].image} alt={hit.name} className='object-cover h-full w-full'/>
      </div>
      <div>
        <h1>
          <Snippet hit={hit} attribute="name" />
        </h1>
      </div>
    </a>
  );
}
