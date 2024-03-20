<script setup>
import {ref} from 'vue'
import CardContainer from 'src/components/CardContainer.vue'
import ChordsForm from 'src/components/ChordsForm.vue'
import ProgressionSelect from 'src/components/ProgressionSelect.vue'
import { majorScale } from 'src/composables/scale'

const chordsModel = ref([])
const progressionModel = ref()
function handleSubmit(){
  console.log(chordsModel.value , progressionModel.value)
  console.log(majorScale(chordsModel.value[0]))
}

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
    <div class=" q-gutter-y-md">
      <ChordsForm :model= chordsModel />
      <ProgressionSelect v-model= progressionModel  />
    </div>
    <template v-slot:footer>
      <q-btn type="submit" @click="handleSubmit" class="full-height bg-accent" label="submit"  />
    </template>
  </CardContainer>
</q-page>

</template>
