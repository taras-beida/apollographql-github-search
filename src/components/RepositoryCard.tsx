import { FC } from 'react'
import { useReactiveVar } from '@apollo/client'

import { IconButton } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import { RepositoryItemFragment } from '../graphql/queries/repository/repository.generated.ts'
import { favoritesVar } from '../cache.ts'
import ListCard from './ListCard.tsx'

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
    <ListCard title={name}>
      <IconButton aria-label="delete" size="large" onClick={favoriteHandler}>
        {isFavorite ? (
          <BookmarkIcon fontSize="inherit" />
        ) : (
          <BookmarkBorderIcon fontSize="inherit" />
        )}
      </IconButton>
    </ListCard>
  )
}

export default RepositoryCard
