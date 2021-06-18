<template>
  <div class="container home">
    <b6f-card>
      <form action="POST">
        <b6f-form-element text="Nom" element="input"></b6f-form-element>
        <b6f-form-element text="Prenom" element="input"></b6f-form-element>
        <b6f-form-element text="Tele" element="input"></b6f-form-element>
        <b6f-form-element text="Age" element="input"></b6f-form-element>
        <b6f-button size="md" type="submit" tag="button">Login</b6f-button>
      </form>
    </b6f-card>
  </div>
</template>

<script>
import B6fButton from "../components/ui-elements/b6f-button.vue";
import B6fCard from "../components/ui-elements/b6f-card.vue";
import B6fFormElement from "../components/ui-elements/b6f-form-element.vue";
export default {
  name: "Register",
  components: {
    B6fButton,
    B6fCard,
    B6fFormElement,
  },
};
</script>

<style scoped>
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
