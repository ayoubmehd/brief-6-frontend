<template>
  <div class="container home">
    <b6f-card>
      <form action="POST">
        <b6f-form-element
          class="login-form-group"
          text="Reference"
          :vertical="true"
          element="input"
        ></b6f-form-element>
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
  name: "Login",
  components: {
    B6fButton,
    B6fCard,
    B6fFormElement,
  },
};
</script>

<style scoped>
.login-form-group {
  text-align: center;
  width: 100%;
}
form {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
</style>
