import { ActionIcon, Paper, Text, Title } from '@mantine/core'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Pencil, Trash } from 'tabler-icons-react'

import UpdateBeerModal from '../components/UpdateBeerModal'
import { SessionContext } from '../contexts/SessionContext'

const BeerDetailsPage = () => {
  const { beerId } = useParams()
  const navigate = useNavigate()
  const { apiWithToken } = useContext(SessionContext)

  const [beer, setBeer] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const fetchBeer = async () => {
    const response = await apiWithToken(`beers/${beerId}`)
    setBeer(response)
  }

  useEffect(() => {
    fetchBeer()
  }, [])

  useEffect(() => {
    if (needRefresh) {
      fetchBeer()
      setNeedRefresh(false)
    }
  }, [needRefresh])

  const deleteBeer = async () => {
    await fetch(`http://localhost:5005/api/beers/${beerId}`, { method: 'DELETE' })
    navigate('/beers')
  }

  const handleDelete = () => {
    deleteBeer()
  }

  return (
    <>
      <Paper shadow='xs' p='md'>
        <Title order={2}>{beer.name}</Title>
        <Text>{beer.tagline}</Text>
        <Text>{beer.volume}</Text>
        <ActionIcon onClick={() => setIsModalOpen(true)}>
          <Pencil size={48} strokeWidth={2} color={'blue'} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete}>
          <Trash size={48} strokeWidth={2} color={'#bf4058'} />
        </ActionIcon>
      </Paper>
      <UpdateBeerModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        beerId={beerId}
        beer={beer}
        setNeedRefresh={setNeedRefresh}
      />
    </>
  )
}

export default BeerDetailsPage
