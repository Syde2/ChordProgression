<script setup>
import {ref} from 'vue'

const progressionModel =defineModel()
const options =['I - IV - V', ' I - V - vi - IV', 'vi - IV - I - V', 'I - vi - IV - V']

</script>

<template>
  <q-select  item-aligned dense square outlined v-model=progressionModel :options="options" label="Progression"
  bg-color='secondary' input-class="text-white" color="white" popup-content-class="bg-secondary text-white" />
</template>
