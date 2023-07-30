import { FC } from 'react'

import { ApolloError } from '@apollo/client'
import ErrorIcon from '@mui/icons-material/Error'

interface Props {
  error: ApolloError
}

const QueryErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div>
      <ErrorIcon /> {error.message}
    </div>
  )
}

export default QueryErrorMessage
