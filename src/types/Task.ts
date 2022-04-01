export type TaskType = {
  id: string;
  name: string;
  date?: Date;
  completed: boolean;
  subtasks?: Subtask[];
};

export type Subtask = {
  name: string;
  completed: boolean;
};
