import { Search } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from "react";

const SearchBar = () => {
    const [userSearch, setUserSearch] = useState('');

    return(
        <form className="flex-1 max-w-md">
            <Link to={`/search/${userSearch}`} className="relative">
                <button className={`absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer`}>
                    <Search className="text-muted-foreground w-5 h-5" />
                </button>
            </Link>
            <input
                onChange={(e) => setUserSearch(e.target.value)}
                type="text"
                placeholder="Search for your medicine"
                className="w-full pl-10 pr-4 py-2 border border-muted-foreground rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
        </form>
    )
}
export default SearchBar;