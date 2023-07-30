import { ChangeEvent } from 'react'
import { useReactiveVar } from '@apollo/client'
import { Stack, TextField, Typography } from '@mui/material'

import { useDebounce } from '../hooks/useDebounce.ts'
import { useSearchRepositoriesQuery } from '../graphql/queries/search/search.generated.ts'

import RepositoryCard from '../components/RepositoryCard.tsx'
import ListLoader from '../components/ListLoader.tsx'
import QueryErrorMessage from '../components/QueryErrorMessage.tsx'

import { searchRepositoriesVar } from '../cache.ts'

const Home = () => {
  const cachedSearch = useReactiveVar(searchRepositoriesVar)
  const debouncedSearchValue = useDebounce(cachedSearch, 500)

  const { data, loading, error } = useSearchRepositoriesQuery({
    variables: {
      query: debouncedSearchValue,
    },
  })

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    searchRepositoriesVar(e.target.value)
  }

  if (error) return <QueryErrorMessage error={error} />

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        margin="normal"
        value={cachedSearch}
        onChange={searchHandler}
        sx={{ mb: 2 }}
        fullWidth
      />

      {loading && <ListLoader />}

      {!loading && !data?.search.nodes?.length && (
        <Typography variant="h6" align="center" gutterBottom>
          No results
        </Typography>
      )}

      <Stack spacing={2} sx={{ mb: 5 }}>
        {data?.search.nodes?.map(
          (node) =>
            node?.__typename === 'Repository' && (
              <RepositoryCard key={node.id} repository={node} />
            )
        )}
      </Stack>
    </div>
  )
}

export default Home
