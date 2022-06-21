import { Card, Text } from '@mantine/core'

const BeerCardSection = ({ name }) => {
  return (
    <Card.Section>
      <Text weight={500} size='lg' align='center'>
        {name}
      </Text>
    </Card.Section>
  )
}

export default BeerCardSection
