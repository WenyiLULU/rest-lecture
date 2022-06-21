import { Card, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import BeerCardSection from './BeerCardSection'

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
      <BeerCardSection name={beer.name} />

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
