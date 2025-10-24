import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'

type Event = { id: string; title: string; date: string; city: string; venue: string; }

export default function Events() {
  const { data } = useQuery({
    queryKey: ['events'],
    queryFn: async () => (await axios.get(import.meta.env.VITE_API_BASE + '/events')).data
  })

  return (
    <Grid container spacing={2}>
      {(data?.items || []).map((e: Event) => (
        <Grid key={e.id} item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{e.title}</Typography>
              <Typography color="text.secondary">{new Date(e.date).toLocaleString()}</Typography>
              <Typography>{e.venue} — {e.city}</Typography>
              <Button sx={{ mt: 1 }} variant="contained">Book</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
