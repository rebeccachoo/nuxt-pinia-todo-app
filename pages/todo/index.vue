<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";
import { ref } from "vue";

// Create a reactive reference for the input text
const text = ref("");
const todoStore = useTodoStore();

const addToTodos = () => {
  if (text.value && text.value.length > 0) {
    todoStore.addTodo(text.value);
    text.value = "";
  }
};
</script>

<template>
  <div>
    <div>Todo</div>
    <div>
      <div>current: {{ text }}</div>
      <input
        type="text"
        v-model="text"
        placeholder="Enter a todo"
        style="border: 1px solid grey"
      />
      <button class="pl-2 hover:text-gray-800 hover:bold" @click="addToTodos">
        submit
      </button>

      <div class="mt-3">
        <div v-for="(todo, index) in todoStore.todos" :key="todo.title">
          <div class="bg-slate-100 p-2 my-3 flex">
            <div
              class="text-red-500 cursor-pointer"
              @click="todoStore.removeTodo(index)"
            >
              Remove
            </div>
            <div
              class="text-blue-500 ml-2 cursor-pointer"
              @click="todoStore.updateTodo(index, text)"
            >
              Update
            </div>
            <div class="ml-3">{{ todo.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
