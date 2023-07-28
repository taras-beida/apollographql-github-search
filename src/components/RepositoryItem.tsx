import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'

import { IconButton, Paper, Rating } from '@mui/material'
import { styled } from '@mui/material/styles'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { RepositoryItemFragment } from '../graphql/queries/repository/repository.generated.ts'
import { favoritesVar } from '../cache.ts'

interface Props {
  repository: RepositoryItemFragment
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}))

const RepositoryItem: FC<Props> = ({ repository }) => {
  const { id, name } = repository

  const favorites = useReactiveVar(favoritesVar)
  const isFavorite = favorites.some((item) => item.id === id)

  const favoriteHandler = () => {
    favoritesVar(
      isFavorite
        ? favorites.filter((item) => item.id !== id)
        : [...favorites, { id: id, name: name, clientRating: 0 }]
    )
  }

  const ratingHandler = (value: number | null) => {
    favoritesVar(
      favorites.map((item) =>
        item.id === id ? { ...item, clientRating: value || 0 } : item
      )
    )
  }

  return (
    <Item elevation={3}>
      {name}

      <Rating
        name="size-large"
        // defaultValue={repository.clientRating || 0}
        defaultValue={0}
        size="large"
        onChange={(_, value) => ratingHandler(value)}
      />

      <IconButton aria-label="delete" size="large" onClick={favoriteHandler}>
        {isFavorite ? (
          <BookmarkIcon fontSize="inherit" />
        ) : (
          <BookmarkBorderIcon fontSize="inherit" />
        )}
      </IconButton>
    </Item>
  )
}

export default RepositoryItem
