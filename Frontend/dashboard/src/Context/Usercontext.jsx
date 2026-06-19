import { createContext } from "react";


//step1

export const DataContext=createContext()

//step2
export const DataProvider=({children})=>{
    return <DataContext.Provider value={{}} >
        {children}

    </DataContext.Provider>

}