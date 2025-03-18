export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    date: string;
  }

export interface NotIdTodo {
    title: string;
    description: string;
    completed: boolean;
    date: string;
  }
  