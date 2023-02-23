

import { createContext, useState } from "react";

const SearchContext = createContext()

function SearchProvider({children}) {

    const [searchText, setSearchText] = useState('');

    return (
        <SearchContext.Provider value={{searchText, setSearchText}}>{children}</SearchContext.Provider>
    )
}
export { SearchContext, SearchProvider}