import { Box, Typography, Button, Card, CardContent, Stack } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Home() {
  return (
    <Box>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" fontWeight={800}>Local art, melted into your city</Typography>
        <Typography sx={{ mt: 2 }} color="text.secondary">
          Events • Workshops • Online Gallery (coming soon)
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: 'center' }}>
          <Button variant="contained" component={RouterLink} to="/events">Explore Events</Button>
          <Button variant="outlined" component={RouterLink} to="/workshops">Book a Workshop</Button>
        </Stack>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight={700}>Why Mango Melt?</Typography>
          <Typography sx={{ mt: 1 }}>
            We promote local artists, support venues and build art culture. Affordable art for everyone.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
