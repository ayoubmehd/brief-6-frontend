<template>
  <button :class="classType">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    size: String,
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
button {
  padding: 10px 20px;
  background-color: #5bc0de;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
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
