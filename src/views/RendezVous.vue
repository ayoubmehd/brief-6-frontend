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
          <b6f-icon svg="add"></b6f-icon>
        </b6f-button>
      </div>
    </div>
    <b6f-table :head="['date', 'horaire', 'text', '']">
      <tr v-for="renderVous in rendezVousData" :key="renderVous.id">
        <td>{{ renderVous.date }}</td>
        <td>{{ renderVous.horaire }}</td>
        <td>{{ renderVous.text }}</td>
        <td>
          <b6f-button
            tag="a"
            href="#"
            class="table-link"
            size="sm"
            @click.prevent="openEdit"
          >
            <b6f-icon svg="edit"></b6f-icon>
          </b6f-button>
          <b6f-button
            tag="a"
            class="table-link"
            size="sm"
            :style="{ 'background-color': '#d9544f' }"
            href="#"
            @click.prevent="deleteRendezVousClick(renderVous.id)"
          >
            <b6f-icon svg="delete"></b6f-icon>
          </b6f-button>
        </td>
      </tr>
    </b6f-table>
  </b6f-card>
</template>

<script>
import B6fCard from "../components/ui-elements/b6f-card.vue";
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fTable from "../components/ui-elements/b6f-table.vue";
import B6fIcon from "../components/ui-elements/b6f-icon.vue";
import { getRendezVous, deleteRendezVous } from "../api/index.js";
import { onMounted, reactive, ref } from "@vue/runtime-core";

export default {
  name: "RendezVous",
  components: {
    B6fTable,
    B6fCard,
    B6fButton,
    B6fIcon,
  },
  setup() {
    const rendezVousData = ref([]);
    const editing = reactive({
      date: new Date(),
      horaire: -1,
      text: "fdsfafds",
    });
    // Get Rendez vous when page loaded
    const getAllRendezVous = async () =>
      (rendezVousData.value = await getRendezVous());

    onMounted(() => {
      getAllRendezVous();
    });

    // edit rednez vous
    const openEdit = () => {};
    const edit = () => {};

    // delete rendez vous
    const deleteRendezVousClick = async (id) => {
      const res = await deleteRendezVous(id);
      console.log(res);
      getAllRendezVous();
    };

    return { rendezVousData, openEdit, edit, deleteRendezVousClick, editing };
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
