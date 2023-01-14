<template>
  <select name="" id="" class="select" :v-model="modelValue" @change="changeOption">
    <option disabled value="chose" class="option">Выберите из списка</option>
    <option class="option" v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'main-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style scoped>
.select {
  padding: 5px 10px;
}
.option {
  padding: 5px;
}
</style>
