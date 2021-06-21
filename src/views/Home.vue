<template>
  <div class="container home">
    <b6f-card>
      <b6f-button to="/register" tag="router-link">new user</b6f-button>
      <b6f-button to="/rendez-vous" tag="router-link">rendez-vous</b6f-button>
    </b6f-card>
  </div>
</template>

<script>
// @ is an alias to /src
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fCard from "../components/ui-elements/b6f-card.vue";

export default {
  name: "Home",
  components: {
    B6fButton,
    B6fCard,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped></style>
