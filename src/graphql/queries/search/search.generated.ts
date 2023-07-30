import * as Types from '../../../types.generated';

import { gql } from '@apollo/client';
import { RepositoryItemFragmentDoc } from '../repository/repository.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SearchRepositoriesQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
}>;


export type SearchRepositoriesQuery = { __typename?: 'Query', search: { __typename?: 'SearchResultItemConnection', nodes?: Array<{ __typename?: 'App' } | { __typename?: 'Discussion' } | { __typename?: 'Issue' } | { __typename?: 'MarketplaceListing' } | { __typename?: 'Organization' } | { __typename?: 'PullRequest' } | { __typename?: 'Repository', id: string, name: string } | { __typename?: 'User' } | null> | null } };


export const SearchRepositoriesDocument = gql`
    query SearchRepositories($query: String!) {
  search(query: $query, type: REPOSITORY, first: 20) {
    nodes {
      ...RepositoryItem
    }
  }
}
    ${RepositoryItemFragmentDoc}`;

/**
 * __useSearchRepositoriesQuery__
 *
 * To run a query within a React component, call `useSearchRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRepositoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchRepositoriesQuery(baseOptions: Apollo.QueryHookOptions<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>(SearchRepositoriesDocument, options);
      }
export function useSearchRepositoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>(SearchRepositoriesDocument, options);
        }
export type SearchRepositoriesQueryHookResult = ReturnType<typeof useSearchRepositoriesQuery>;
export type SearchRepositoriesLazyQueryHookResult = ReturnType<typeof useSearchRepositoriesLazyQuery>;
export type SearchRepositoriesQueryResult = Apollo.QueryResult<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>;