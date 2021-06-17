<template>
  <component :is="tag" class="btn" :class="classType">
    <slot></slot>
  </component>
</template>
<script>
import { computed } from "vue";

export default {
  props: {
    size: String,
    tag: {
      type: [String, Object],
      default: () => ({}),
    },
  },
  setup(props) {
    const classes = ["sm", "md", "lg"];
    const classType = computed(() =>
      classes.indexOf(props.size) !== -1 ? props.size : "lg"
    );

    return { classType };
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  background-color: #5bc0de;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
}
.lg {
  width: 150px;
}
.md {
  width: 100px;
}
.sm {
  width: 50px;
}
</style>
