import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'

import { IconButton, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { RepositoryItemFragment } from '../graphql/queries/repository/repository.generated.ts'
import { favoritesVar } from '../cache.ts'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}))

interface Props {
  repository: RepositoryItemFragment
}

const RepositoryCard: FC<Props> = ({ repository }) => {
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

  return (
    <Item elevation={2}>
      {name}

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

export default RepositoryCard
