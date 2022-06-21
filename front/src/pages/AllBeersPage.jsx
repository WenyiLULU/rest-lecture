import { Box } from '@mantine/core'
import { useContext } from 'react'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import BeerCard from '../components/BeerCard'
import NewBeerModal from '../components/NewBeerModal'
import { BeersContext } from '../contexts/BeersContext'

const AllBeersPage = () => {
  const { beers } = useContext(BeersContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
