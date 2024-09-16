<template>
  <div>
    <input
      type="text"
      :placeholder="placeholder"
      v-model="formattedValue"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'PhoneNumberInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const formattedValue = ref(props.modelValue)
    const locale = ref(navigator.language || 'en-US')

    const placeholder = ref(locale.value === 'en-US' ? '+1 (123) 456-7890' : 'Phone number')

    const allowedCharacters = /[0-9()+\-\s]/g

    const onInput = (event: Event) => {
      const input = event.target as HTMLInputElement
      formattedValue.value = input.value.replace(/[^0-9()+\-\s]/g, '')
      emit('update:modelValue', formattedValue.value)
    }

    watchEffect(() => {
      formattedValue.value = props.modelValue
    })

    return {
      formattedValue,
      placeholder,
      onInput
    }
  }
})
</script>

<style scoped>
input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}
</style>
