import { Grid, Card, CardContent, Typography, Button, List, ListItem } from '@mui/material'

const plans = [
  { name: 'Silver', price: '€10/mo', features: ['Upload up to 5 artworks'] },
  { name: 'Gold', price: '€20/mo', features: ['Up to 15 artworks'] },
  { name: 'Platinum', price: '€35/mo', features: ['Homepage feature', 'Dedicated page', 'Newsletter promo', 'Exhibition announcements', '35–50s promo video'] }
]

export default function Pricing() {
  return (
    <Grid container spacing={2}>
      {plans.map(p => (
        <Grid key={p.name} item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">{p.name}</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>{p.price}</Typography>
              <List dense>
                {p.features.map(f => <ListItem key={f}>• {f}</ListItem>)}
              </List>
              <Button fullWidth variant="contained">Choose {p.name}</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
