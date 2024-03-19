<script setup>
import {ref} from 'vue '
import ChordInput from 'src/components/ChordInput.vue'

const props = defineProps({
  model : Array
})

</script>

<template>
  <q-form class="flex row no-wrap">
    <ChordInput v-model=props.model[0] />
    <ChordInput v-model=props.model[1] />
    <ChordInput v-model=props.model[2] />
    <ChordInput v-model=props.model[3] />
    <ChordInput v-model=props.model[4] />
  </q-form>
</template>
