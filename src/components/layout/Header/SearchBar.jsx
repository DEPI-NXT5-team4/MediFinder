import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const SearchBar = (values) => {
    const navigate = useNavigate();
    const [userSearch, setUserSearch] = useState('');        

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userSearch.trim()) return; // prevent empty search

        navigate(`/search/${userSearch}`);

        setUserSearch(""); // 🔥 CLEAR FORM AFTER SUBMIT
    };

    return(
        <form onSubmit={handleSubmit} className={`${values.value1}`}>
                <button type="submit" className={`${values.value2}`}>
                    <Search className={`${values.value3}`} />
                </button>
            <input
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                type="text"
                placeholder="Search for your medicine"
                className={`${values.value4}`}
            />
        </form>
    )
}
export default SearchBar;