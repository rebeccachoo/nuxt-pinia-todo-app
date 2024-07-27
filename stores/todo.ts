import { defineStore } from "pinia";

interface Todo {
  title: string;
}

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
  }),
  getters: {
    getAllTodos: (state) => state.todos,
  },
  actions: {
    addTodo(title: string) {
      this.todos.push({ title });
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1);
    },
    updateTodo(index: number, newTitle: string) {
      console.log(this.todos);
      this.todos[index].title = newTitle;
    },
  },
});
