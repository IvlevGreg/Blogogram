<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'pop-up',
  mixins: [toggleMixin],
}
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  margin: auto;
  padding: 30px;
  min-height: 50px;
  min-width: 300px;
  max-width: 800px;

  background: white;
  border-radius: 15px;
}
</style>
