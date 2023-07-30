import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'

import { IconButton, Rating } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { FavoriteItemFragment } from '../graphql/queries/favorites/favorites.generated.ts'
import { favoritesVar } from '../cache.ts'
import ListCard from './ListCard.tsx'

interface Props {
  favorite: FavoriteItemFragment
}

const FavoriteCard: FC<Props> = ({ favorite }) => {
  const { id, name, clientRating } = favorite
  const favorites = useReactiveVar(favoritesVar)

  const ratingHandler = (value: number | null) => {
    favoritesVar(
      favorites.map((item) =>
        item.id === id ? { ...item, clientRating: value || 0 } : item
      )
    )
  }

  const deleteHandler = () => {
    favoritesVar(favorites.filter((item) => item.id !== id))
  }

  return (
    <ListCard title={name}>
      <Rating
        name="size-large"
        value={clientRating || 0}
        size="large"
        onChange={(_, value) => ratingHandler(value)}
      />

      <IconButton aria-label="delete" size="large" onClick={deleteHandler}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </ListCard>
  )
}

export default FavoriteCard
