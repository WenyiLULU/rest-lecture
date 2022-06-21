import { Anchor, AppShell, Box, Header, Image, Navbar, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 100 }} p='xs'>
          <Anchor
            component={NavLink}
            to='/'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : undefined)}
          >
            Beers
          </Anchor>
          <Anchor
            component={NavLink}
            to='/bars'
            style={({ isActive }) => (isActive ? { color: 'tomato' } : undefined)}
          >
            Bars
          </Anchor>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          <Box sx={{ display: 'grid', gridTemplate: '1fr / 100px 1fr' }}>
            <Image />
            <Title order={3} align='center'>
              Where can I get a drink ?
            </Title>
          </Box>
        </Header>
      }
      styles={{
        main: {
          backgroundColor: '#E8D3B9',
        },
      }}
    >
      {children}
    </AppShell>
  )
}

export default Layout
