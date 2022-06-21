import { Button, Input, InputWrapper, Modal, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'

const NewBeerModal = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate()
  const { apiWithToken } = useContext(SessionContext)
  const form = useForm({
    initialValues: {
      name: '',
      tagline: '',
      volume: ' 0.33',
    },
  })

  const createBeer = async newBeer => {
    const response = await apiWithToken('beers', 'POST', newBeer)
    navigate(`/beers/${response.id}`)
  }

  const handleSubmit = values => {
    createBeer(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add a new beer'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Name' description='The name of the new beer'>
          <Input {...form.getInputProps('name')} />
        </InputWrapper>
        <InputWrapper required label='Tagline' description='The tagline of the new beer'>
          <Input {...form.getInputProps('tagline')} />
        </InputWrapper>
        <InputWrapper required label='Volume' description='The volume of the new beer'>
          <NumberInput precision={2} min='0' {...form.getInputProps('volume')} />
        </InputWrapper>
        <Button type='submit'>Create</Button>
      </form>
    </Modal>
  )
}

export default NewBeerModal
