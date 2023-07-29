import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Container } from '@mui/material'

import DrawerAppBar from './components/AppBar.tsx'

import Home from './pages/Home.tsx'
import Favorites from './pages/Favorites.tsx'
import Error from './pages/Error.tsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <DrawerAppBar />
        <Container maxWidth="md" sx={{ mt: 10 }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
