import { useGetFavoritesQuery } from '../graphql/queries/favorites/favorites.generated.ts'

const Favourites = () => {
  const { data } = useGetFavoritesQuery()

  console.log('data', data)

  return (
    <div>
      {data?.favorites?.map((item) => <div key={item?.id}>{item?.name}</div>)}
    </div>
  )
}

export default Favourites
