import { Button } from "./ui/Button"
import { Icons } from "./Icons"
import { useState } from "react"

const FavoriteButton = () => {
    const [favorites] = useState([]);

    return (
      <Button 
        variant="ghost"
        size="ghost"
        className="relative"
      >
        <Icons.heart className='w-6 h-6 text-gray-600/95' />
        {favorites.length ? (
          <span className="w-[1.1rem] h-[1.1rem] rounded-full bg-rose-500/90 text-white flex items-center justify-center text-sm font-semibold absolute top-2.5 -right-2 -translate-y-1/2 -translate-x-1/2">{favorites.length}</span>
        ) : null}
      </Button>
    )
}

export default FavoriteButton