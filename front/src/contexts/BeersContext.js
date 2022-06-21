import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'

const BeersContext = createContext()

const BeersContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const { token, apiWithToken } = useContext(SessionContext)

  const fetchBeers = async () => {
    const response = await apiWithToken('beers')
    setBeers(response)
  }

  useEffect(() => {
    if (token) {
      fetchBeers()
    }
  }, [token])

  return <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
}

export { BeersContext, BeersContextProvider }
