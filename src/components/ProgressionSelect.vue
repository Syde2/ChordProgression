<script setup>
import {ref} from 'vue'

const progressionModel =defineModel()
const options =[
  { label: 'I - IV - V', value:[0,3,4] },
  { label:  ' I - V - vi - IV', value:[0,4,-5 ,3] },
  { label:  'vi - IV - I - V', value:[-5,3,0,4] },
  { label:  'vi - IV - I - V', value:[-5,3,0,4] },
  { label:  'I - vi - IV - V', value:[0,-5,3,4] },
  ]

</script>

<template>
  <q-select  dark item-aligned dense square outlined v-model=progressionModel :options="options" label="Progression"
  bg-color='secondary' input-class="text-white" label-color="white" popup-content-class="bg-secondary text-white" />
</template>
