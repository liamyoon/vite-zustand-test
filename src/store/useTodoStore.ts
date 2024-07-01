import { create } from 'zustand';

type TodoItem = {
  title: string;
  id: number;
  complete: boolean;
}

type TodoStore = {
  todoList: TodoItem[];
  addTodoItem: (title: string) => void;
  deleteTodoItem: (id: number) => void;
  updateTodoItem: (id: number, complete: boolean) => void;
};

const useTodoStore = create<TodoStore>((set) => ({
  todoList: [],
  addTodoItem: (title) => set((state) => {
    const newId = (state.todoList[state.todoList.length - 1]?.id || 0) + 1;
    return {
      todoList: [...state.todoList, { id: newId, title, complete: false }],
    }
  }),
  deleteTodoItem: (id) => set((state) => ({
    todoList: state.todoList.filter((item) => item.id !== id),
  })),
  updateTodoItem: (id, complete) => set((state) => ({
    todoList: state.todoList.map((item) => item.id === id ? { ...item, complete } : item),
  })),
}));

export default useTodoStore;
