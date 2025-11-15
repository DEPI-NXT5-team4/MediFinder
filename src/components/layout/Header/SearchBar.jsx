import { Search } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from "react";

const SearchBar = (values) => {
    const [userSearch, setUserSearch] = useState('');        

    return(
        <form className={`${values.value1}`}>
            <Link to={`/search/${userSearch}`} className="relative">
                <button className={`${values.value2}`}>
                    <Search className={`${values.value3}`} />
                </button>
            </Link>
            <input
                onChange={(e) => setUserSearch(e.target.value)}
                type="text"
                placeholder="Search for your medicine"
                className={`${values.value4}`}
            />
        </form>
    )
}
export default SearchBar;