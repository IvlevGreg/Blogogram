<template>
  <li class="post">
    <div class="textContent">
      <h2 class="title">{{ post.title }}</h2>
      <p class="descr">{{ post.body }}</p>
    </div>
    <main-button @click="$emit('remove', post)">Удалить</main-button>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  border: 2px solid teal;
}

.title {
  margin: 0 0 10px;
}
.descr {
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.textContent {
  max-width: 600px;
}
.button {
  align-self: flex-end;
}
</style>
