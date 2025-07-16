export { TaskItem } from './ui/task-item';

export { fetchTasks, createTask, updateTask, deleteTask } from './api/tasks-api';

export {
  tasksAtom,
  editedTaskAtom,
  createTaskAtom,
  deleteTaskAtom,
  updateTaskAtom,
  filteredTasksAtom,
  titleFilterAtom,
  categoryFilterAtom,
  priorityFilterAtom,
  statusFilterAtom,
} from './model/atoms';
export { taskSchema } from './model/schemas';
export type {
  TTask,
  TTaskCategory,
  TTaskPriority,
  TTaskStatus,
  TTaskFormData,
} from './model/types';
