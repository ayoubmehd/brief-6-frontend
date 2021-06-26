<template>
  <div class="container home">
    <b6f-card>
      <form action="POST" @submit.prevent="add">
        <b6f-form-element
          text="Date"
          :vertical="true"
          element="input"
          type="date"
          v-model="formData.date"
        ></b6f-form-element>
        <b6f-form-element
          text="Horaire"
          :vertical="true"
          :modelValue="formData.horaire"
          @update:modelValue="formData.horaire = $event"
          element="select"
        >
          <option value="-1" disabled selected>Horaire</option>
          <option v-for="h in horaire" :key="h" :value="h">{{ h }}</option>
        </b6f-form-element>
        <b6f-form-element
          text="text"
          :vertical="true"
          element="textarea"
          v-model="formData.text"
        ></b6f-form-element>
        <b6f-button size="md" type="submit" tag="button">Save</b6f-button>
      </form>
    </b6f-card>
  </div>
</template>

<script>
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fCard from "../components/ui-elements/b6f-card.vue";
import B6fFormElement from "../components/ui-elements/b6f-form-element.vue";
import { reactive, ref, watch } from "vue";
import { addRendezVous, loadHours } from "../api/index.js";

export default {
  name: "AddRendezVous",
  components: {
    B6fButton,
    B6fCard,
    B6fFormElement,
  },
  setup() {
    const horaire = ref([]);
    const formData = reactive({
      date: new Date(),
      horaire: -1,
      text: "",
    });

    const add = async () => {
      const response = await addRendezVous(formData);
      console.log(response);
    };

    const loadAviableHours = async () => {
      horaire.value = await loadHours(formData.date);
    };

    // watch date
    watch(
      () => formData.date,
      () => {
        loadAviableHours();
      }
    );

    return { horaire, formData, add };
  },
};
</script>

<style scoped>
.card {
  height: auto;
}
.form-group {
  width: 100%;
  margin: 5px 0;
}
form {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
</style>
