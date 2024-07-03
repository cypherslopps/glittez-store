import PropTypes from "prop-types";
import { useLocation, useRoutes, useSearchParams } from "react-router-dom";
import { Icons } from "./Icons";

const Tag = ({ title, value }) => {
    const { pathname } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <li
            className={`bg-gray-100/60 min-w-20 w-max flex items-center justify-between px-2 py-1 rounded-lg border border-gray-200 text-sm text-gray-700/90 ${title === "size" ? "uppercase" : "capitalize"} select-none font-nunito`}
            onClick={() => {
                searchParams.delete(title, value);
                setSearchParams(setSearchParams);
            }}
        >
            {value}
            <span className="cursor-pointer">
                <Icons.close className="w-4 h-4 text-gray-700 ml-1.5" />
            </span>
        </li>
    )
}

Tag.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}

const Tags = () => {
    const [searchParams] = useSearchParams();
    const params = {};
    const items = {};

    if (searchParams.size > 0) {
        for(let [name, value] of searchParams.entries()) {
            items[name] = value;
            params.items = items;
        }
    }

    return (
        <ul className="flex items-center gap-x-2">
            {Object.values(params?.items ?? {}) ? Object.entries(params?.items ?? {}).map(([name, value]) => (
                <Tag 
                    key={name}
                    title={name}
                    value={value}
                />
            )): null}
        </ul>
    )
}


export default Tags