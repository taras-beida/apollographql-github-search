import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'

import { styled } from '@mui/material/styles'
import { IconButton, Paper, Rating } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { FavoriteItemFragment } from '../graphql/queries/favorites/favorites.generated.ts'
import { favoritesVar } from '../cache.ts'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}))

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
    <Item elevation={2}>
      {name}

      <Rating
        name="size-large"
        value={clientRating || 0}
        size="large"
        onChange={(_, value) => ratingHandler(value)}
      />

      <IconButton aria-label="delete" size="large" onClick={deleteHandler}>
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Item>
  )
}

export default FavoriteCard
