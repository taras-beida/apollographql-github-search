import * as Types from '../../../types.generated';

import { gql } from '@apollo/client';
export type RepositoryItemFragment = { __typename?: 'Repository', id: string, name: string };

export const RepositoryItemFragmentDoc = gql`
    fragment RepositoryItem on Repository {
  id
  name
}
    `;