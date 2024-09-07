import { useCategories } from "@/hooks/useCategories";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationDropdown = ({ isMenuOpen, setIsMenuOpen }) => {
  const { productCategories } = useCategories();
  console.log(productCategories)

  return (
    <div className={`w-full min-w-[50vw] absolute left-full -translate-x-[30%] -translate-y-1/2 bg-white border border-gray-400/35 rounded-lg transition-all duration-300 ${isMenuOpen ? "opacity-100 top-[5.5rem]" : "opacity-0 top-[6rem] pointer-events-none"} overflow-hidden`}>
      <ul className="w-full py-2 px-4 grid grid-cols-5 gap-2">
        {productCategories.filter((_, idx) => idx <= 12).map(category => (
          <li key={category.name}>
            <Link
              to={`/products/category/${category.slug}`}
              className="text-md hover:underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

NavigationDropdown.propTypes = {
    isMenuOpen: PropTypes.bool,
    setIsMenuOpen: PropTypes.func
}

export default NavigationDropdown