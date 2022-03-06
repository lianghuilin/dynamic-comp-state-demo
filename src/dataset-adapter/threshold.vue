<template>
  <div data-key="threshold">
    <slot v-bind="dataset"></slot>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("threshold");

export default {
  name: "thresholdDS",
  computed: {
    ...mapState(["threshold"]),
    dataset() {
      return {
        threshold: this.threshold,
      };
    },
  },
};
</script>
