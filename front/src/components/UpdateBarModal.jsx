import { Button, Input, InputWrapper, Modal, MultiSelect } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useContext } from 'react'
import { useEffect } from 'react'
import { BeersContext } from '../contexts/BeersContext'

const UpdateBarModal = ({ isModalOpen, setIsModalOpen, barId, bar, setNeedRefresh }) => {
  const { beers } = useContext(BeersContext)
  const form = useForm({
    initialValues: {
      name: '',
      beers: [],
    },
  })

  useEffect(() => {
    form.setValues({
      name: bar.name,
      beers: bar.beers?.map(beer => beer._id),
    })
  }, [bar])

  const updateBar = async newValues => {
    await fetch(`http://localhost:5005/api/bars/${barId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newValues),
    })
    setNeedRefresh(true)
    setIsModalOpen(false)
  }

  const handleSubmit = values => {
    updateBar(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update bar'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Name' description='The name of the bar'>
          <Input {...form.getInputProps('name')} />
        </InputWrapper>
        <MultiSelect
          data={beers.map(beer => ({ value: beer._id, label: beer.name }))}
          label='The beers you can drink in this bar'
          {...form.getInputProps('beers')}
        />
        <Button type='submit'>Update</Button>
      </form>
    </Modal>
  )
}

export default UpdateBarModal
