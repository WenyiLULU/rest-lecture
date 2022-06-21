import { Button, Input, InputWrapper, Modal, MultiSelect, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { BeersContext } from '../contexts/BeersContext'

const NewBarModal = ({ isModalOpen, setIsModalOpen }) => {
  const navigate = useNavigate()
  const { beers } = useContext(BeersContext)
  const form = useForm({
    initialValues: {
      name: '',
      beers: [],
    },
  })

  const createBar = async newBar => {
    const response = await fetch('http://localhost:5005/api/bars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBar),
    })
    const parsed = await response.json()
    navigate(`/bars/${parsed.id}`)
  }

  const handleSubmit = values => {
    createBar(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Add a new bar'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Name' description='The name of the new bar'>
          <Input {...form.getInputProps('name')} />
        </InputWrapper>
        <MultiSelect
          data={beers.map(beer => ({ value: beer._id, label: beer.name }))}
          label='The beers you can drink in this bar'
          {...form.getInputProps('beers')}
        />
        <Button type='submit'>Create</Button>
      </form>
    </Modal>
  )
}

export default NewBarModal
