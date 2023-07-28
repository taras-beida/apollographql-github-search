import { Unstable_Grid2 as Grid } from '@mui/material'

import Repositories from './components/Repositories.tsx'
import Favourites from './components/Favourites.tsx'
const App = () => {
  return (
    <Grid container>
      <Grid xs={6} xsOffset={3}>
        <Repositories />
        <Favourites />
      </Grid>
    </Grid>
  )
}

export default App
