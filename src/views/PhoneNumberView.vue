<template>
  <div>
    <h1>Phone Number</h1>
    <PhoneNumberInput v-model="phoneNumber" />
    <p>Phone Number Value: {{ phoneNumber }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PhoneNumberInput from '@/components/PhoneNumberInput.vue'
export default defineComponent({
  name: 'PhoneNumberView',
  components: {
    PhoneNumberInput
  },
  setup () {
    const phoneNumber = ref('')

    return {
      phoneNumber
    }
  }
})
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
