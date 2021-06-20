<template>
  <td>
    <b6f-form-element
      v-if="showInput"
      :element="element"
      :showLabel="false"
      v-model="value"
      v-bind="$attrs"
    >
      <option value="-1">horaire</option>
      <option v-for="h in horaire" :value="h" :key="h">{{ h }}</option>
    </b6f-form-element>
    <span v-else>
      <slot></slot>
    </span>
  </td>
</template>

<script>
import { computed } from "@vue/runtime-core";
import B6fFormElement from "./b6f-form-element.vue";
export default {
  components: {
    B6fFormElement,
  },
  props: {
    element: String,
    modelValue: [String, Date, Number],
    showInput: Boolean,
    horaire: Array,
  },
  emits: [""],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      },
    });

    return { value };
  },
};
</script>

<style></style>
