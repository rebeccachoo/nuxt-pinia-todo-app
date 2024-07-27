<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <div v-if="show" class="absolute w-full h-full bg-slate-100">
    <div>Modal</div>
    <div><button @click="$emit('close')">close</button></div>
  </div>
</template>
