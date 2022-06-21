import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import AnonymousRoute from './components/AnonymousRoute'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import { BeersContextProvider } from './contexts/BeersContext'
import { SessionContext } from './contexts/SessionContext'
import AllBarsPage from './pages/AllBarsPage'
import AllBeersPage from './pages/AllBeersPage'
import BarDetailsPage from './pages/BarDetailsPage'
import BeerDetailsPage from './pages/BeerDetailsPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <BeersContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<h1>Hello anonymous</h1>} />
          <Route
            path='/signup'
            element={
              <AnonymousRoute>
                <SignupPage />
              </AnonymousRoute>
            }
          />
          <Route
            path='/login'
            element={
              <AnonymousRoute>
                <LoginPage />
              </AnonymousRoute>
            }
          />
          <Route
            path='/beers'
            element={
              <PrivateRoute>
                <AllBeersPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/bars'
            element={
              <PrivateRoute>
                <AllBarsPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/beers/:beerId'
            element={
              <PrivateRoute>
                <BeerDetailsPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/bars/:barId'
            element={
              <PrivateRoute>
                <BarDetailsPage />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BeersContextProvider>
  )
}

export default App
