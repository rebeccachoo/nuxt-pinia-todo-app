import { defineStore } from "pinia";

// Interfaces
export interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoAdd {
  title: string;
}

export interface TodoState {
  items: Todo[];
}

export interface TodoUpdate {
  title?: string;
  done?: boolean;
}

export const useTodoStore = defineStore("todoStore", {
  state: (): TodoState => ({
    items: [],
  }),
  getters: {
    getById:
      (state) =>
      (id: string): Todo | undefined => {
        return state.items.find((item) => item.id === id);
      },
    getOrderedTodos: (state): Todo[] => {
      return state.items
        .slice()
        .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    },
  },
  actions: {
    add(partialTodo: TodoAdd) {
      const newTodo: Todo = {
        id: (this.items.length + 1).toString(),
        title: partialTodo.title,
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      this.items.push(newTodo);
    },
    remove(id: string) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    update(id: string, update: TodoUpdate) {
      this.items = this.items.map((item) =>
        item.id === id ? { ...item, ...update, updatedAt: new Date() } : item
      );
    },
  },
});
