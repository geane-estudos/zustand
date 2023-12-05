import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "PLANNED" }],
  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state }] })), //adding a new element
});

export const useStore = create(store);
