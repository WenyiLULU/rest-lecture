import { createContext, useContext, useEffect, useState } from 'react'
import { SessionContext } from './SessionContext'

const BeersContext = createContext()

const BeersContextProvider = ({ children }) => {
  const [beers, setBeers] = useState([])
  const { isAuthenticated, apiWithToken } = useContext(SessionContext)

  const fetchBeers = async () => {
    const response = await apiWithToken('beers')
    setBeers(response)
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchBeers()
    }
  }, [isAuthenticated])

  return <BeersContext.Provider value={{ beers }}>{children}</BeersContext.Provider>
}

export { BeersContext, BeersContextProvider }
