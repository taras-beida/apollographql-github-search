import { Stack, Typography } from '@mui/material'

import { useGetFavoritesQuery } from '../graphql/queries/favorites/favorites.generated.ts'
import FavoriteCard from '../components/FavoriteCard.tsx'
import QueryErrorMessage from '../components/QueryErrorMessage.tsx'

const Favorites = () => {
  const { data, error } = useGetFavoritesQuery()

  if (error) return <QueryErrorMessage error={error} />

  if (!data?.favorites?.length) {
    return (
      <Typography variant="h4" align="center" gutterBottom>
        No favorites
      </Typography>
    )
  }

  return (
    <Stack spacing={2}>
      {data?.favorites?.map(
        (item) => item && <FavoriteCard key={item.id} favorite={item} />
      )}
    </Stack>
  )
}

export default Favorites
