"use client";

import {createContext, useContext, Dispatch, SetStateAction, useState} from "react"
import { usePathname } from 'next/navigation';

interface ContextProps{
    page: string,
    setPage: Dispatch<SetStateAction<String>>
}

const GlobalContext = createContext<ContextProps>({
    page: '',
    setPage: (): string => ''
})

export const GlobalContextProvider = ({children}) => {
    
    const [page, setPage] = useState('Dashboard')
    return(
        <GlobalContext.Provider value={{page, setPage}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)