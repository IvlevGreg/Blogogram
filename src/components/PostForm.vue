<template>
  <form class="form" @submit.prevent>
    <main-input
      v-focus
      v-model.trim="post.title"
      type="text"
      class="input"
      placeholder="Название"
    />
    <main-input v-model.trim="post.body" type="text" class="input" placeholder="Описание" />
    <main-button type="submit" @click="createPost">Создать</main-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.input {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;

  border: 1px solid teal;
  transition: opacity 0.3s ease, border 0.3s ease;
}
.input:hover {
  opacity: 0.6;
}

.button {
  align-self: flex-end;
}
</style>
