import { makeVar, InMemoryCache } from '@apollo/client'
import { FavoriteItemFragment } from './graphql/queries/favorites/favorites.generated.ts'

export const favoritesVar = makeVar<FavoriteItemFragment[]>([])
export const searchRepositoriesVar = makeVar<string>('')

export const CustomInMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favorites: {
          read() {
            return favoritesVar()
          },
        },
      },
    },
  },
})
