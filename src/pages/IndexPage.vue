<script setup>
import {ref} from 'vue'
import CardContainer from 'src/components/CardContainer.vue'
import ChordsForm from 'src/components/ChordsForm.vue'
import ProgressionSelect from 'src/components/ProgressionSelect.vue'
import { majorScale, minorScale } from 'src/composables/scale'
import { Notify } from 'quasar'

const chordsModel = ref([])
const progressionModel = ref()
const tempDisplayAnswer = ref()
function handleSubmit(){
  try {
    tempDisplayAnswer.value = majorScale(chordsModel.value[0])
  } catch (error) {
    Notify.create({
      type: 'negative',
      message : error
    })
  }
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
      <div style="height: 30px;" class="flex flex-center text-white">
        {{ tempDisplayAnswer }}
      </div>
    </div>
    <template v-slot:footer>
      <q-btn type="submit" @click="handleSubmit" class="full-height bg-accent" label="submit"  />
    </template>
  </CardContainer>
</q-page>

</template>
