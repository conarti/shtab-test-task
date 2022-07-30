<template>
  <div class="app-input">
    <label
      v-if="hasLabel"
      class="app-input-label"
      :for="id"
    >
      {{ label }}
      <input
        :id="id"
        class="app-input-form"
        :type="type"
        :value="modelValue"
        @input="updateModelValue"
      >
    </label>
  </div>
</template>

<script>
import components from '@/globals/components';
import isString from '@/helpers/isString';
import uniqueId from '@/helpers/uniqueId';

export default {
  name: 'AppInput',
  props: {
    modelValue: {
      type: [String, null],
      required: true,
      validate(value) {
        return isString(value);
      },
    },
    label: {
      type: String,
      required: false,
      default: null,
      validate(value) {
        return isString(value);
      },
    },
    id: {
      type: String,
      required: false,
      default: uniqueId(components.appInput.defaultIdPrefix),
      validate(value) {
        return isString(value);
      },
    },
    type: {
      type: String,
      required: false,
      default: components.appInput.defaultType,
      validate(value) {
        return isString(value) && components.appInput.types.includes(value);
      },
    },
  },
  emits: {
    'update:model-value': (value) => isString(value),
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    hasLabel() {
      return this.label !== null;
    },
  },
  methods: {
    updateModelValue(event) {
      this.$emit('update:model-value', event.target.value);
    },
  },
};
</script>
