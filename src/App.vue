<template>
  <div class="app">
    <h2 class="title">Добавить пост</h2>
    <post-form @create="createPost" />
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
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(postD) {
      this.posts = this.posts.filter((post) => post !== postD)
    },
  },
}
</script>

<style>
body {
  margin: 0 auto;
  padding: 30px;
  max-width: 1000px;
}

.form {
  margin-bottom: 20px;
}
</style>
