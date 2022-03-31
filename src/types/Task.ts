export type Task = {
  name: string;
  date: Date;
  completed: boolean;
  subtasks?: Subtask[];
};

export type Subtask = {
  name: string;
  completed: boolean;
};
