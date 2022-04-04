export type TaskType = {
  _id: string;
  name: string;
  date?: number;
  completed: boolean;
  subtasks?: Subtask[];
};

export type Subtask = {
  name: string;
  completed: boolean;
};
