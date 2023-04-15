import { ref, onMounted } from 'vue'
import { axios } from 'axios'

export function usePosts(limit) {
  const posts = ref([])
  const totalPages = ref(0)
  const isPostsLoading = ref(true)

  const fetching = async () => {
    try {
      isPostsLoading.value = true
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: this.page,
          _limit: this.limit,
        },
      })
      totalPages.value = Math.ceil(response.headers['x-total-count'] / limit)
      posts.value = [...posts.value, ...response.data]
    } catch (err) {
      console.log(err)
    }
    isPostsLoading.value = false
  }

  onMounted(fetching)

  return {
    posts,
    isPostsLoading,
    totalPages,
  }
}
