// Import React
import { createContext, useState } from "react";

const ContextLine = createContext()

function TextProvider({children}) {

    const [text, setText] = useState('');

    return (
        <ContextLine.Provider value={{text, setText}}>{children}</ContextLine.Provider>
    )
}
export { ContextLine, TextProvider}