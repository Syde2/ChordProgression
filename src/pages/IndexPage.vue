<script setup>
import { ref, computed } from 'vue'
import CardContainer from 'src/components/CardContainer.vue'
import ChordsForm from 'src/components/ChordsForm.vue'
import ProgressionSelect from 'src/components/ProgressionSelect.vue'
import { majorScale, minorScale, reduceScaleToProgression } from 'src/composables/scale'
import { Notify } from 'quasar'

const chordsModel = ref([])
const progressionModel = ref()
const tempDisplayAnswer = ref()
const scale = ref()
const mode = computed(()=>chordsModel.value[0].endsWith('m') ? 'minor' : 'major' )

function setTheScale(){
  const tonicChord = chordsModel.value[0]
  mode.value.endsWith('m') ?
   scale.value = minorScale(tonicChord):
   scale.value = majorScale(tonicChord)
}

function getTheProgressionChords(){
  if(progressionModel.value && scale.value) {
    return reduceScaleToProgression(progressionModel.value, scale.value)
  }else{
    throw('Select a Chord or a Progression')
  }
}

function handleSubmit() {
  try {
    const scale = setTheScale()
     tempDisplayAnswer.value = getTheProgressionChords()

  } catch (error) {
    Notify.create({
      type: 'negative',
      message: error
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
        <ChordsForm :model=chordsModel />
        <ProgressionSelect v-model=progressionModel />
        <div style="height: 30px;" class="flex flex-center text-white">
          {{ tempDisplayAnswer }}

        </div>
      </div>
      <template v-slot:footer>
        <q-btn type="submit" @click="handleSubmit" class="full-height bg-accent" label="submit" />
      </template>
    </CardContainer>
  </q-page>

</template>
