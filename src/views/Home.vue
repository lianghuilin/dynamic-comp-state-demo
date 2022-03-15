<template>
    <div class="home">
        <!-- 数据适配器层 -->
        <component
            v-for="config in configList"
            :key="config.id"
            :is="config.dataset"
            :config="config"
        >
            <template slot-scope="dataset">
                <!-- 通用组件 -->
                <component
                    :is="config.component"
                    :config="config"
                    :dataset="dataset"
                ></component>
            </template>
        </component>
    </div>
</template>

<script>
import configList from '../config'
import CompFactory from '../components'
import AdapterFactory from '../dataset-adapter'

export default {
    name: 'Home',
    data() {
        return {
            configList,
        }
    },
    beforeCreate() {
        const components = {}
        configList.forEach(config => {
            const { component: componentKey, dataset } = config
            components[componentKey] = CompFactory(componentKey)
            components[dataset] = AdapterFactory(dataset)
        })
        this.$options.components = components
    },
}
</script>

<style scoped>
.home {
    position: relative;
}
</style>
