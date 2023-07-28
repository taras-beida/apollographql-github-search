import { ChangeEvent, useState } from 'react'

import { Skeleton, Stack, TextField } from '@mui/material'
import ErrorIcon from '@mui/icons-material/Error'

import { useDebounce } from '../hooks/useDebounce.ts'
import { useSearchRepositoriesQuery } from '../graphql/queries/search/search.generated.ts'

import RepositoryItem from './RepositoryItem.tsx'

const Repositories = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearchValue = useDebounce(searchValue, 500)

  const { data, loading, error } = useSearchRepositoriesQuery({
    variables: {
      query: debouncedSearchValue,
    },
  })

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  if (error)
    return (
      <div>
        <ErrorIcon /> {error.message}
      </div>
    )

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        margin="normal"
        value={searchValue}
        onChange={searchHandler}
        fullWidth
      />

      {loading && (
        <Stack spacing={2}>
          <Skeleton variant="rounded" height={60} />
          <Skeleton variant="rounded" height={60} />
          <Skeleton variant="rounded" height={60} />
        </Stack>
      )}

      <Stack spacing={2}>
        {data?.search.nodes?.map(
          (node) =>
            node?.__typename === 'Repository' && (
              <RepositoryItem key={node.id} repository={node} />
            )
        )}
      </Stack>
    </div>
  )
}

export default Repositories
