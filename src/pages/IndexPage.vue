<script setup>
import {ref} from 'vue'
import CardContainer from 'src/components/CardContainer.vue'
import ChordsForm from 'src/components/ChordsForm.vue'

const model = ref([])

</script>

<template>

<q-page class="flex flex-center">
  <CardContainer>
    <template v-slot:titre>
      Progression
    </template>

    <template v-slot:image>
        <q-img src="piano.jpg" ratio="1" />
    </template>

    {{ model }}

    <ChordsForm  :model="model" />

    <template v-slot:footer>
      <q-btn type="submit" class="full-height bg-accent" label="submit"  />
    </template>

  </CardContainer>
</q-page>

</template>
