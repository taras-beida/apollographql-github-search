import { FC, useState } from 'react'
import { useReactiveVar } from '@apollo/client'

import { Button, IconButton, Rating } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { FavoriteItemFragment } from '../graphql/queries/favorites/favorites.generated.ts'
import { favoritesVar } from '../cache.ts'

import ListCard from './ListCard.tsx'
import AppDialog from './AppDialog.tsx'

interface Props {
  favorite: FavoriteItemFragment
}

const FavoriteCard: FC<Props> = ({ favorite }) => {
  const { id, name, clientRating } = favorite
  const favorites = useReactiveVar(favoritesVar)

  const [isConfirmDelete, setConfirmDelete] = useState(false)

  const ratingHandler = (value: number | null) => {
    favoritesVar(
      favorites.map((item) =>
        item.id === id ? { ...item, clientRating: value || 0 } : item
      )
    )
  }

  const deleteHandler = () => {
    setConfirmDelete(false)
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

      <IconButton
        aria-label="delete"
        size="large"
        onClick={() => setConfirmDelete(true)}
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>

      <AppDialog
        title="Delete"
        content="Are you sure you want to delete this item?"
        isOpen={isConfirmDelete}
        onCancel={() => setConfirmDelete(false)}
        cancelButton={
          <Button variant="contained" onClick={() => setConfirmDelete(false)}>
            Cancel
          </Button>
        }
        confirmButton={
          <Button
            variant="contained"
            onClick={deleteHandler}
            color="error"
            autoFocus
          >
            Delete
          </Button>
        }
      />
    </ListCard>
  )
}

export default FavoriteCard
