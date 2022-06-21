import { Card, Text } from '@mantine/core'
import { Link } from 'react-router-dom'

const BeerCard = ({ beer }) => {
  return (
    <Card
      shadow='sm'
      p='xl'
      component={Link}
      to={`/beers/${beer._id}`}
      sx={{
        '&:hover': {
          backgroundColor: '#EEEEEE',
        },
      }}
    >
      <Card.Section>
        <Text weight={500} size='lg' align='center'>
          {beer.name}
        </Text>
      </Card.Section>

      <Text weight={500} align='center'>
        {beer.tagline}
      </Text>

      <Text size='sm' align='center'>
        {beer.volume}
      </Text>
    </Card>
  )
}

export default BeerCard
