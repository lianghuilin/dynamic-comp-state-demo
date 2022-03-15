<template>
  <div
    class="card"
    :style="{
      ...config.options,
    }"
  >
    <template v-if="notEmpty">
      <div class="item" v-for="(item, i) in dataList" :key="item.name">
        <div>
          <span>{{ i + 1 }}-</span>
          <span>{{ item.name }}</span>
        </div>
        <span>{{ item.count }} / {{ item.ratio }}%</span>
      </div>
    </template>
    <div v-else>暂无数据</div>
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
  computed: {
    notEmpty() {
      return (
        this.dataset &&
        this.dataset.dataList &&
        this.dataset.dataList.length > 0
      );
    },
    dataList() {
      return this.dataset.dataList;
    },
  },
};
</script>

<style scoped>
.card {
  position: absolute;
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 0 10px;
}

.item {
  display: flex;
  height: 25px;
  line-height: 25px;
  justify-content: space-between;
  width: 100%;
}
</style>
