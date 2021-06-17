<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  border-radius: 3px;
  background-color: #ffffff;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.15);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
}

.h-content {
  height: unset;
}
.h-fixed {
  height: 500px;
}

.w-auto {
  width: auto;
}

.w-sm {
  width: 200px;
}
.w-md {
  width: 400px;
}
.w-lg {
  width: 800px;
}
</style>
