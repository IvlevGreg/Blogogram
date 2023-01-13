<template>
  <div class="app">
    <main-button @click="showPopUp">Создать пост</main-button>
    <pop-up v-model:show="isPopUpVisible">
      <h2 class="title">Добавить пост</h2>
      <post-form @create="createPost" />
    </pop-up>
    <h2 class="title">Список постов</h2>

    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Title',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rerum voluptates cupiditate doloremque ad harum dolorum, non pariatur mollitia officiis sunt amet similique odit, ipsum ex deleniti totam consectetur ab!',
        },
        {
          id: 2,
          title: 'Title 2',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rerum voluptates cupiditate doloremque ad harum dolorum, non pariatur mollitia officiis sunt amet similique odit, ipsum ex deleniti totam consectetur ab!',
        },
        {
          id: 3,
          title: 'Title 3',
          body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rerum voluptates cupiditate doloremque ad harum dolorum, non pariatur mollitia officiis sunt amet similique odit, ipsum ex deleniti totam consectetur ab!',
        },
      ],
      isPopUpVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.isPopUpVisible = false
    },
    removePost(postD) {
      this.posts = this.posts.filter((post) => post !== postD)
    },
    showPopUp() {
      this.isPopUpVisible = true
    },
  },
}
</script>

<style scoped>
.app {
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;
}
.button {
  margin-bottom: 10px;
}
.title {
  margin: 0 0 20px;
}
</style>
