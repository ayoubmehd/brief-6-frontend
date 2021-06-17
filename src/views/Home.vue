<template>
  <div class="home">
    <b6f-button size="sm">button</b6f-button>
    <b6f-card></b6f-card>
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
};
</script>
