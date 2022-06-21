export const fetchBeers = async setter => {
  const response = await fetch('http://localhost:5005/api/beers')
  const parsed = await response.json()
  setter(parsed)
}
