import { FC } from 'react'

import { ApolloError } from '@apollo/client'

import ErrorIcon from '@mui/icons-material/Error'
import { Typography } from '@mui/material'

interface Props {
  error: ApolloError
}

const QueryErrorMessage: FC<Props> = ({ error }) => {
  return (
    <Typography variant="h6" align="center" gutterBottom>
      <ErrorIcon /> {error.message}
    </Typography>
  )
}

export default QueryErrorMessage
