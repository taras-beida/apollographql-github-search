import { Skeleton, Stack } from '@mui/material'

const ListLoader = () => {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  )
}

export default ListLoader
