<script setup>
import {ref} from 'vue'

const model = defineModel()

const chord = ref(null);
const validationRules = [val => validateInput(val) || 'Wrong Format' ]

function validateInput(input) {
  if( !input.length || input===''){return true}
  const regex = /^(?:[A-G](?:[#♭bmd](?:[miM])?)?)?(?:[mM])?$/;
  return regex.test(input);
}


</script>

<template>
	<q-input dark :rules="validationRules"  maxlength="4" item-aligned dense square no-error-icon  outlined   bottom-slots  v-model="model"
   bg-color='secondary'  input-style=" text-align: center;" />
</template>
