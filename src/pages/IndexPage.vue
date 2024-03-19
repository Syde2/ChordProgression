<script setup>
import {ref} from 'vue'
import CardContainer from 'src/components/CardContainer.vue'
import ChordsForm from 'src/components/ChordsForm.vue'
import ProgressionSelect from 'src/components/ProgressionSelect.vue'

const chordsModel = ref([])
const progressionModel = ref()
function handleSubmit(){
  console.log(chordsModel.value , progressionModel.value)
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
    <div>
      <ChordsForm :model= chordsModel />
      <ProgressionSelect v-model= progressionModel  />
    </div>
    <template v-slot:footer>
      <q-btn type="submit" @click="handleSubmit" class="full-height bg-accent" label="submit"  />
    </template>
  </CardContainer>
</q-page>

</template>
