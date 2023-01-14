<template>
  <div class="post-page">
    <main-button @click="$router.push('/about')" class="nav">О проекте</main-button>

    <h1 class="title">Страница с постами</h1>
    <main-input v-model="searchQuery" placeholder="Поиск по постам" />
    <div class="control-buttons">
      <main-button @click="showPopUp">Создать пост</main-button>
      <main-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <pop-up v-model:show="isPopUpVisible">
      <h2 class="title">Добавить пост</h2>
      <post-form @create="createPost" />
    </pop-up>
    <h2 class="title">Список постов</h2>

    <post-list class="post-list" :posts="sortedAndSearchedPosts" @remove="removePost" />
    <spinner-triple class="loading" v-if="isPostsLoading">Идет загрузка</spinner-triple>
    <div class="observer" ref="observer"></div>
    <!-- <div class="pagination">
      <ul class="pagination-list">
        <li class="pagination-item" v-for="pagePagination in totalPages" :key="pagePagination">
          <main-button
            @click="changePage(pagePagination)"
            :class="{ 'current-page': page === pagePagination }"
          >
            {{ pagePagination }}
          </main-button>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      isPopUpVisible: false,
      isPostsLoading: true,
      selectedSort: 'id',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 10,
      sortOptions: [
        { value: 'id', name: 'По умолчанию' },
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.isPopUpVisible = false
    },
    removePost(postDel) {
      this.posts = this.posts.filter((post) => post !== postDel)
    },
    showPopUp() {
      this.isPopUpVisible = true
    },
    // async fetchPosts() {
    //   this.isPostsLoading = true
    //   try {
    //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    //       params: {
    //         _page: this.page,
    //         _limit: this.limit,
    //       },
    //     })
    //     this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
    //     this.posts = response.data
    //     console.log(response.data)
    //   } catch (err) {
    //     console.log(err)
    //   }
    //   this.isPostsLoading = false
    // },
    async loadMorePosts() {
      this.isPostsLoading = true
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (err) {
        console.log(err)
      }
      this.page++
      this.isPostsLoading = false
    },
    // changePage(pagePagination) {
    //   this.page = pagePagination
    // },
  },
  mounted() {
    // this.fetchPosts()
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts()
      }
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.observer)
  },
  watch: {
    page() {
      // this.fetchPosts()
    },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((postA, postB) => {
        if (this.selectedSort === 'id') {
          return postA[this.selectedSort] - postB[this.selectedSort]
        }
        return postA[this.selectedSort]?.localeCompare(postB[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) => post.title.includes(this.searchQuery))
    },
  },
}
</script>

<style scoped>
.post-page {
  position: relative;
}

.nav {
  position: absolute;
  top: 0px;
  right: 0px;
}
.button {
  margin-bottom: 10px;
}
.post-list {
  margin-bottom: 20px;
}
.title {
  margin: 0 0 20px;
}
.loading {
  margin-top: 10%;
}

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input {
  margin-bottom: 15px;
  min-width: 250px;
  max-width: 60%;
}

.pagination {
}
.pagination-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.pagination-item {
}
.current-page {
  border: 2px solid green !important;
}

.observer {
  height: 30px;
  opacity: 1;
  visibility: hidden;
}
</style>
