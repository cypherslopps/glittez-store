import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { Icons } from "./Icons";

const Tag = ({ title, value }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const deleteSearchParams = () => {
        searchParams.delete(title);
        setSearchParams(setSearchParams);
        const searchQuery = searchParams.toString();

        if (searchQuery) {
            let splitQuery = searchQuery.includes("&") ? searchQuery.replace("&", " ") : searchQuery;
            splitQuery = splitQuery.split(" ");
            
            for (let x of splitQuery) {
                const searchItem = x.split("=");
                searchParams.set(searchItem[0], searchItem[1]);
                setSearchParams(searchParams);
            }
        }

        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState({}, '', newUrl);
    }

    return (
        <li
            className={`bg-gray-100/60 min-w-20 w-max flex items-center justify-between px-2 py-1 rounded-lg border border-gray-200 text-sm text-gray-700/90 ${title === "size" ? "uppercase" : "capitalize"} select-none font-nunito`}
            onClick={deleteSearchParams}
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