<template>
  <div class="home">
    <!-- 遍历配置，用数据层组件，套通用组件 -->
    <component
      v-for="config in configList"
      :key="config.id"
      :is="config.dataset"
      :config="config"
    >
      <template slot-scope="dataset">
        <component :is="config.component" :config="config" :dataset="dataset"></component>
      </template>
    </component>
  </div>
</template>

<script>
import configList from '../config';
import CompFactory from '../components';
import DatasetFactory from '../dataset';

const components = {};
configList.forEach((config) => {
  const { component: componentKey, dataset } = config;
  components[componentKey] = CompFactory(componentKey);
  components[dataset] = DatasetFactory(dataset);
});
console.log('components', components);

export default {
  name: 'Home',
  components,
  data() {
    return {
      configList,
    };
  },
};
</script>

<style scoped>
.home {
  position: relative;
}
</style>
