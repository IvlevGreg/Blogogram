<template>
  <input class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: 'main-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;

  border: 1px solid teal;
  transition: opacity 0.3s ease, border 0.3s ease;
}
</style>
