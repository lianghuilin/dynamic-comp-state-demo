<template>
  <div
    class="card"
    :style="{
      ...config.options,
    }"
  >
    <!-- <component :is="`${config.dataset}`" v-bind="config" >
      <template slot-scope="dataset">
        dataset: {{ dataset.dataList }}
      </template>
    </component> -->
    <div
      v-if="dataset && dataset.dataList && dataset.dataList.length > 0"
    ></div>
    <div>暂无数据</div>
  </div>
</template>

<script>
export default {
  name: 'card',
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
.card {
  position: absolute;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
