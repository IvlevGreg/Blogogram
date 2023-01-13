<template>
  <ul class="posts" v-if="posts.length > 0">
    <post-item
      v-for="post in posts"
      :post="post"
      v-bind:key="post.id"
      @remove="$emit('remove', post)"
    />
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
</style>
