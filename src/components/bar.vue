<template>
  <div
    class="bar"
    :style="{
      ...config.options,
    }"
  >
    <template
      v-if="dataset && dataset.paramList && dataset.paramList.length > 0"
    >
      <div v-for="param in dataset.paramList" :key="param.id">
        {{ param.key }}: {{ param.value }}
      </div>
    </template>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
export default {
  name: 'bar',
  props: {
    config: {
      type: Object,
    },
    dataset: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.bar {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid brown;
}
</style>
