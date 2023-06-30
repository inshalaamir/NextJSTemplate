"use client";

import {createContext, useContext, Dispatch, SetStateAction, useState} from "react"
import { usePathname } from 'next/navigation';

interface ContextProps{
    page: string,
    setPage: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    page: '',
    setPage: (): string => ''
})

export const GlobalContextProvider = ({children}:any) => {
    
    const [page, setPage] = useState('Dashboard')
    return(
        <GlobalContext.Provider value={{page, setPage}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)