<template>
  <ul class="posts" v-if="posts.length > 0">
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </ul>
  <h2 class="no-posts" v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.posts {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;

  list-style: none;
}

.no-posts {
}
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.post-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateX(50%);
}

.post-list-enter-active {
  transition: opacity 1s, transform 1s;
}
.post-list-enter {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-move {
  transition: transform 0.4s;
}
</style>
