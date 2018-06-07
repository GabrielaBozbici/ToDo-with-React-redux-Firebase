export interface Todo {
    name: string;
    description: string;
    completed: boolean;
    date: number;
    id: string;
}

export interface TodoState {
    list: Todo[];
    isLoading: boolean;
  }