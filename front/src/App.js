import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { BeersContextProvider } from './contexts/BeersContext'
import { SessionContextProvider } from './contexts/SessionContext'
import AllBarsPage from './pages/AllBarsPage'
import AllBeersPage from './pages/AllBeersPage'
import BarDetailsPage from './pages/BarDetailsPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <SessionContextProvider>
      <BeersContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<h1>Hello anonymous</h1>} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/beers' element={<AllBeersPage />} />
            <Route path='/bars' element={<AllBarsPage />} />
            <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
            <Route path='/bars/:barId' element={<BarDetailsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BeersContextProvider>
    </SessionContextProvider>
  )
}

export default App
