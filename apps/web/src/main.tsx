import React from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './shell/AppShell'
import Home from './pages/Home'
import Events from './pages/Events'
import Workshops from './pages/Workshops'
import Pricing from './pages/Pricing'

const theme = createTheme({
  palette: { mode: 'light', primary: { main: '#FB8C00' } },
  shape: { borderRadius: 12 }
})

const qc = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={qc}>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)
