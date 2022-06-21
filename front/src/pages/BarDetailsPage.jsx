import { ActionIcon, Paper, Text, Title } from '@mantine/core'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'
import UpdateBarModal from '../components/UpdateBarModal'
import { SessionContext } from '../contexts/SessionContext'

const BarDetailsPage = () => {
  const { barId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken } = useContext(SessionContext)

  const [bar, setBar] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const fetchBar = async () => {
    const response = await apiWithToken(`bars/${barId}`)
    setBar(response)
  }

  useEffect(() => {
    fetchBar()
  }, [])

  useEffect(() => {
    if (needRefresh) {
      fetchBar()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  const deleteBar = async () => {
    await fetch(`http://localhost:5005/api/bars/${barId}`, { method: 'DELETE' })
    navigate('/bars')
  }

  const handleDelete = () => {
    deleteBar()
  }

  return (
    <>
      <Paper shadow='xs' p='md'>
        <Title order={2}>{bar.name}</Title>
        {bar.beers?.map(beer => (
          <Text key={beer._id}>{beer.name}</Text>
        ))}
        <ActionIcon onClick={() => setIsModalOpen(true)}>
          <Pencil size={48} strokeWidth={2} color={'blue'} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <Trash size={48} strokeWidth={2} color={'#bf4058'} />
        </ActionIcon>
      </Paper>
      <UpdateBarModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        barId={barId}
        bar={bar}
        setNeedRefresh={setNeedRefresh}
      />
    </>
  )
}

export default BarDetailsPage
