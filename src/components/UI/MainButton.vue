<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: 'main-button',
}
</script>

<style scoped>
.button {
  padding: 10px 20px;
  box-sizing: border-box;

  background: none;
  border: 1px solid teal;
  cursor: pointer;
  transition: opacity 0.3s ease, border 0.3s ease;
}
.button:hover {
  opacity: 0.6;
}
</style>
