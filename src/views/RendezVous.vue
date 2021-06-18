<template>
  <b6f-card>
    <div class="rendez-vous-header">
      <div class="ref">
        Reference:
      </div>
      <div class="btn-container">
        <b6f-button
          :style="{ 'background-color': '#59b65d' }"
          to="/add-rendez-vous"
          tag="router-link"
          size="md"
        >
          Add
        </b6f-button>
      </div>
    </div>
    <b6f-table :head="['date', 'horaire', 'type consultation', '']">
      <tr>
        <td>date</td>
        <td>horaire</td>
        <td>type consultation</td>
        <td>
          <b6f-button tag="a" href="#" class="table-link" size="sm"
            >edit</b6f-button
          >
          <b6f-button
            tag="a"
            class="table-link"
            size="sm"
            :style="{ 'background-color': '#d9544f' }"
            href="#"
            >delete</b6f-button
          >
        </td>
      </tr>
    </b6f-table>
  </b6f-card>
</template>

<script>
import B6fCard from "../components/ui-elements/b6f-card.vue";
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fTable from "../components/ui-elements/b6f-table.vue";

export default {
  name: "RendezVous",
  components: {
    B6fTable,
    B6fCard,
    B6fButton,
  },
};
</script>

<style scoped>
.table-link {
  margin: 0 2px;
}
td {
  padding: 10px 0;
}
td:last-child {
  text-align: right;
}
.rendez-vous-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
}
</style>
