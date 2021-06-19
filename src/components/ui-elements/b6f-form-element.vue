<template>
  <div class="form-group" :class="vertical ? 'vertical' : ''">
    <label :for="`id-${text}`">{{ text }}</label>
    <component
      :id="`id-${text}`"
      :is="element"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <slot></slot>
    </component>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    element: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Date],
      default: "",
    },
    vertical: Boolean,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const inputVal = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        console.log(val);
        emit("update:modelValue", val);
      },
    });

    return { inputVal };
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
}

.vertical {
  flex-wrap: wrap;
}

.vertical * {
  width: 100%;
}

label {
  display: block;
  width: 30%;
}
input,
select,
textarea {
  display: block;
  width: 70%;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #aaa;
  outline-color: #949494;
}

textarea {
  height: 100px;
}
</style>
