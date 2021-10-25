import useSWRInfinite from 'swr/infinite'
import { getBlogs } from './index';


export const useGetBlogsPages = () => {
  const result = useSWRInfinite(
      (index, previousPageData) => {

        if (index === 0 ) {
              return `/api/blogs`
        }
        if (!previousPageData.length) {
          return null
        }
        return `/api/blogs?offset=${index * 6}}`

  },
    getBlogs
  )

  let hitEnd = false;
  const { data,error,size } = result;
  const isFetchingNextPage =  (size > 0 && data && typeof data[size - 1] == 'undefined')

  if (data) {
    hitEnd = data[data.length - 1].length === 0
  }

  return {...result, hitEnd,isFetchingNextPage}
}