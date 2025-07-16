export { TaskItem } from './ui/task-item';

export { fetchTasks, createTask, updateTask, deleteTask } from './api/tasks-api';

export { TASK_CATEGORIES, CATEGORY_LABELS } from './config/categories';
export { TASK_PRIORITIES, PRIORITY_LABELS } from './config/priorities';
export { TASK_STATUSES, STATUS_LABELS } from './config/statuses';

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
  validationErrorsAtom,
  actionErrorsAtom,
} from './model/atoms';
export { taskSchema } from './model/schemas';
export type {
  TTask,
  TTaskCategory,
  TTaskPriority,
  TTaskStatus,
  TTaskFormData,
  TTaskValidationError,
  TTaskActionError,
} from './model/types';
