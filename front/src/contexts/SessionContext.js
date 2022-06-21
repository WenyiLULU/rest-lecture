import { createContext, useState } from 'react'
import { apiBase } from '../utils/helper'

const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [token, setToken] = useState()

  const apiWithToken = apiBase(token)

  return (
    <SessionContext.Provider value={{ token, setToken, apiWithToken }}>
      {children}
    </SessionContext.Provider>
  )
}

export { SessionContext, SessionContextProvider }
