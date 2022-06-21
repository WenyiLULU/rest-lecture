import { Box } from '@mantine/core'
import { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import BarCard from '../components/BarCard'
import NewBarModal from '../components/NewBarModal'

const AllBarsPage = () => {
  const [bars, setBars] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchData = async () => {
    const response = await fetch('http://localhost:5005/api/bars')
    const parsed = await response.json()
    setBars(parsed)
  }

  useEffect(() => {
    fetchData()
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
        {bars.map(bar => (
          <BarCard key={bar._id} bar={bar} />
        ))}
      </Box>
      <AddButton setIsModalOpen={setIsModalOpen} />
      <NewBarModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default AllBarsPage
