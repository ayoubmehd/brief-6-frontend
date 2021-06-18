<template>
  <i v-html="Icon"></i>
</template>

<script>
import { computed } from "@vue/runtime-core";
import Icons from "../../assets/icons/index.js";

export default {
  name: "B6fIcon",
  props: {
    svg: String,
    fill: String,
  },
  setup(props) {
    const Icon = computed(() => Icons[props.svg]);

    return { Icon };
  },
};
</script>

<style>
i {
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  max-width: 20px;
  max-height: 20px;
  fill: #fff;
}
</style>
