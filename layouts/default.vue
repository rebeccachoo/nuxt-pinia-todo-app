<template>
  <div class="p-5">
    <div class="flex flex-row py-5 items-center">
      <p class="bold">⛹ Rebecca's Vue Playground ⚽</p>
      <div class="px-3">
        <NuxtLink to="/modal"
          ><button
            class="p-2 border-[1px] border-solid border-red-300 rounded-md"
          >
            Modal
          </button></NuxtLink
        >
      </div>
      <div class="pr-3">
        <NuxtLink to="/"
          ><button
            class="p-2 border-[1px] border-solid border-red-300 rounded-md"
          >
            Todo App
          </button></NuxtLink
        >
      </div>
    </div>
    <div
      class="w-full h-full"
      style="border: 1px solid grey; min-height: 1000px"
    >
      <slot />
    </div>
  </div>
</template>
