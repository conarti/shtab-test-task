<template>
  <div class="app-input">
    <label
      v-if="hasLabel"
      class="app-input-label"
      :for="id"
    >
      {{ label }}
      <input
        class="app-input-form"
        :type="type"
        :id="id"
      />
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
};
</script>
