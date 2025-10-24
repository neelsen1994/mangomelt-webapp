import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'

type Workshop = { id: string; title: string; date: string; city: string; instructor: string; }

export default function Workshops() {
  const { data } = useQuery({
    queryKey: ['workshops'],
    queryFn: async () => (await axios.get(import.meta.env.VITE_API_BASE + '/workshops')).data
  })

  return (
    <Grid container spacing={2}>
      {(data?.items || []).map((w: Workshop) => (
        <Grid key={w.id} item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{w.title}</Typography>
              <Typography color="text.secondary">{new Date(w.date).toLocaleString()}</Typography>
              <Typography>Instructor: {w.instructor}</Typography>
              <Button sx={{ mt: 1 }} variant="contained">Book</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
