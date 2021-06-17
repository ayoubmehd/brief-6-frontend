<template>
  <div class="container home">
    <b6f-card>
      <b6f-button to="/new-user" tag="router-link">new user</b6f-button>
      <b6f-button to="/render-vous" tag="router-link">rendez-vous</b6f-button>
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

<style scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
}
.card .btn {
  margin: 10px 0;
}
</style>
