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
      <template v-if="hasErrors">
        <span
          v-for="(error, idx) in errors"
          :key="idx"
          class="app-input-error-message"
        >
          {{ error }}
        </span>
      </template>
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
    errors: {
      type: Array,
      required: false,
      default: () => [],
      validate(value) {
        return value.length === 0 || value.every((error) => isString(error));
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
    hasErrors() {
      return this.errors.length > 0;
    },
  },
  methods: {
    updateModelValue(event) {
      this.$emit('update:model-value', event.target.value);
    },
  },
};
</script>
