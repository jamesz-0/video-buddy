import React, { useState } from 'react'
import { PropsWithChildren } from 'app/utils'

export interface ContextObj {
  data: object
  updateData: UpdateDataFunction
}

export interface UpdateDataFunction {
  (changedData: ContextObj): void
}

const Context = React.createContext<ContextObj>({
  data: [],
  updateData: () => {},
})

export interface ContextProviderProps extends PropsWithChildren {
  dataObj: ContextObj
}

export function ContextProvider({ dataObj, children }: ContextProviderProps) {
  const [modifiedData, setModifiedData] = useState(dataObj)

  function updateData(changedData: ContextObj) {
    setModifiedData(changedData)
  }

  const contextValue: ContextObj = {
    data: modifiedData,
    updateData,
  }

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
