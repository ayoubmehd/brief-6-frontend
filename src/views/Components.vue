<template>
  <div class="home">
    <b6f-button size="sm">button</b6f-button>
    <b6f-card></b6f-card>
    <b6f-form-element
      element="input"
      text="Elemnt"
      :vertical="true"
      :value="value"
      @input="value = $event"
    ></b6f-form-element>
  </div>
</template>

<script>
// @ is an alias to /src
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fCard from "../components/ui-elements/b6f-card.vue";
import B6fFormElement from "../components/ui-elements/b6f-form-element.vue";

export default {
  name: "Home",
  components: {
    B6fButton,
    B6fCard,
    B6fFormElement,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
