<template>
  <div>
    <button @click="test">
      Test
    </button>
  </div>
</template>

<script>
import { test } from "../api/index.js";
export default {
  setup() {
    return { test };
  },
};
</script>

<style></style>
