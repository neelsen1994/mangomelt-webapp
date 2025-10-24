import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar position="sticky" color="inherit" elevation={0}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>Mango Melt</Typography>
          <Button component={RouterLink} to="/" color="primary">Home</Button>
          <Button component={RouterLink} to="/events">Events</Button>
          <Button component={RouterLink} to="/workshops">Workshops</Button>
          <Button component={RouterLink} to="/pricing">Pricing</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  )
}
