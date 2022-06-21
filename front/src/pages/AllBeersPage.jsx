import { Box } from '@mantine/core'
import { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import BeerCard from '../components/BeerCard'
import NewBeerModal from '../components/NewBeerModal'
import { fetchBeers } from '../utils/helper'

const AllBeersPage = () => {
  const [beers, setBeers] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchBeers(setBeers)
  }, [])

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplate: '1fr / 1fr 1fr',
          gridAutoRows: '1fr',
          gap: '20px',
          margin: '20px',
        }}
      >
        {beers.map(beer => (
          <BeerCard key={beer._id} beer={beer} />
        ))}
      </Box>
      <AddButton setIsModalOpen={setIsModalOpen} />
      <NewBeerModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default AllBeersPage
