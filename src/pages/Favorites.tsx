import { useGetFavoritesQuery } from '../graphql/queries/favorites/favorites.generated.ts'
import FavoriteCard from '../components/FavoriteCard.tsx'

const Favorites = () => {
  const { data } = useGetFavoritesQuery()

  return data?.favorites?.map(
    (item) => item && <FavoriteCard key={item.id} favorite={item} />
  )
}

export default Favorites
