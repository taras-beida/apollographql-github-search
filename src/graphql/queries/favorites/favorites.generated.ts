import * as Types from '../../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetFavoritesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetFavoritesQuery = { __typename?: 'Query', favorites?: Array<{ __typename?: 'Repository', id: string, name: string, clientRating?: number | null } | null> | null };


export const GetFavoritesDocument = gql`
    query GetFavorites {
  favorites @client {
    id
    name
    clientRating
  }
}
    `;

/**
 * __useGetFavoritesQuery__
 *
 * To run a query within a React component, call `useGetFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
      }
export function useGetFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, options);
        }
export type GetFavoritesQueryHookResult = ReturnType<typeof useGetFavoritesQuery>;
export type GetFavoritesLazyQueryHookResult = ReturnType<typeof useGetFavoritesLazyQuery>;
export type GetFavoritesQueryResult = Apollo.QueryResult<GetFavoritesQuery, GetFavoritesQueryVariables>;