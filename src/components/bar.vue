<template>
  <div
    class="bar"
    :style="{
      ...config.options,
    }"
  >
    <template
      v-if="notEmpty"
    >
      <div v-for="param in paramList" :key="param.id">
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
  computed: {
    notEmpty(){
      return this.dataset && this.dataset.threshold
    },
    paramList(){
      let resultList = []
      Object.keys(this.dataset.threshold).forEach(key => {
        resultList.push({
          key,
          value: this.dataset.threshold[key],
        })
      })
      return resultList
    }
  }
};
</script>

<style scoped>
.bar {
  position: absolute;
  border: 1px solid brown;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
