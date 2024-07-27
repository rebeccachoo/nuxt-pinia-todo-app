<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>

<template>
  <div>
    <div>
      <modal :show="showModal" @close="showModal = false" />
      <button
        @click="showModal = true"
        class="border-[1px] border-solid border-red-600 p-2"
      >
        Open Modal
      </button>
    </div>
  </div>
</template>

<style></style>
