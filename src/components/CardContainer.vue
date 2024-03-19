<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
</script>

<template>
  <q-card class="container glassEffect radius ">
    <div class="paddingContainer q-pa-md ">

      <q-card-section v-if="slots.titre" class="subtitle">
        <slot name="titre"></slot>
        <q-separator v-if="slots.titre" />
      </q-card-section>

      <q-card-section horizontal>
        <div v-if="slots.image" class="gt-sm col-4 flex flex-center ">
          <q-avatar size="10vw" class="shadow-12">
            <slot name="image"></slot>
          </q-avatar>
        </div>
        <div class="text-body2 flex items-center" :class="slots.image ? 'col-12 col-md-8' : ' col-12'">
          <slot></slot>
        </div>

      </q-card-section>
    </div>
    <q-card-section v-if="slots.footer" class="bg-secondary flex flex-center">
      <slot name="footer"></slot>

    </q-card-section>
  </q-card>
</template>

