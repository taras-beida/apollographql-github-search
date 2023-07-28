import { makeVar, InMemoryCache } from '@apollo/client'
import { Favorite } from './types.generated.ts'

export const favoritesVar = makeVar<Favorite[]>([])

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
