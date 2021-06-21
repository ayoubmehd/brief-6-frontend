<template>
  <div class="container home">
    <b6f-card>
      <form action="POST" @submit.prevent="login">
        <b6f-form-element
          class="login-form-group"
          text="Reference"
          :vertical="true"
          element="input"
          v-model="auth.ref"
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
import { useRouter } from "vue-router";
import { identifyUser } from "../api/index.js";
import { reactive } from "@vue/reactivity";

export default {
  name: "Login",
  components: {
    B6fButton,
    B6fCard,
    B6fFormElement,
  },
  setup() {
    const auth = reactive({
      ref: "",
    });

    const router = useRouter();

    const login = async () => {
      await identifyUser(auth);
      router.push({ name: "RendezVous" });
    };

    return { auth, login };
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
