<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="h in head" :key="h">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "B6fTable",
  props: {
    head: Array,
  },
};
</script>

<style scoped>
.table-container {
  overflow: auto;
}
table {
  width: 600px;
  text-align: left;
  border-collapse: collapse;
}
th {
  border-bottom: 1px solid;
  padding: 15px 0;
}
</style>
