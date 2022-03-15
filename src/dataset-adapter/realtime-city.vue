<template>
    <div data-key="adapter-realtime-city">
        <slot v-bind="dataset"></slot>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('realtimeCity')

export default {
    name: 'realtimeCityDS',
    props: {
        config: {
            type: Object,
        },
    },
    computed: {
        ...mapState(['cityList']),
        dataset() {
            return {
                dataList: this.cityList,
            }
        },
    },
}
</script>
