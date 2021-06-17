<script>
import { computed, h } from "vue";

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
    value: {
      type: String,
      default: "",
    },
    vertical: Boolean,
  },
  emits: ["input"],
  render() {
    return h(
      "div",
      { class: `form-group ${this.vertical ? "vertical" : ""}` },
      [
        h("label", {}, this.text),
        h(
          this.element,
          {
            placeholder: this.text,
            onInput: (event) => {
              this.inputVal = event.target.value;
              this.$emit("input", event.target.value);
            },
          },
          ""
        ),
      ]
    );
  },
  setup(props, { emit }) {
    const inputVal = computed({
      get() {
        return props.value;
      },
      set(val) {
        emit("input", val);
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
input {
  display: block;
  width: 70%;
  padding: 5px 10px;
  border-radius: 3px;
  border: 1px solid #aaa;
  outline-color: #949494;
}
</style>
