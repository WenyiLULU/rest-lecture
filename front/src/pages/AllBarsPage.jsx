import { Box } from '@mantine/core'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import BarCard from '../components/BarCard'
import NewBarModal from '../components/NewBarModal'
import { SessionContext } from '../contexts/SessionContext'

const AllBarsPage = () => {
  const { apiWithToken } = useContext(SessionContext)
  const [bars, setBars] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchData = async () => {
    const response = await apiWithToken('bars')
    setBars(response)
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
