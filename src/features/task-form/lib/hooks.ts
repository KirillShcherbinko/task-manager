import { useAtom, useAtomValue, useSetAtom } from 'jotai';

import {
  type TTaskFormData,
  type TTaskValidationError,
  actionErrorsAtom,
  createTask,
  createTaskAtom,
  editedTaskAtom,
  taskSchema,
  tasksAtom,
  updateTask,
  updateTaskAtom,
  validationErrorsAtom,
} from '@/entities/task';

import { generateNumericId, getDirtyFields } from '@/shared';

////////// Создание задачи //////////
const useCreateTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const createTaskState = useSetAtom(createTaskAtom);

  const setActionErrors = useSetAtom(actionErrorsAtom);

  return async (newTask: TTaskFormData) => {
    const prevState = [...tasks];

    const id = generateNumericId();
    const createdAt = new Date();

    createTaskState({ id, ...newTask, createdAt });

    try {
      const createdTask = await createTask(newTask);
      return createdTask;
    } catch (error) {
      setTasks(prevState);
      setActionErrors((prev) => [...prev.slice(-5), 'Error when creating a task']);
    }
  };
};

////////// Обновление задачи //////////
const useUpdateTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const updateTaskState = useSetAtom(updateTaskAtom);

  const setActionErrors = useSetAtom(actionErrorsAtom);

  return async (taskId: number, newTaskData: Partial<TTaskFormData>) => {
    const prevState = [...tasks];

    updateTaskState(taskId, newTaskData);

    try {
      const updatedTask = await updateTask(taskId, newTaskData);
      return updatedTask;
    } catch (error) {
      setTasks(prevState);
      setActionErrors((prev) => [...prev.slice(-5), 'Error when updating a task']);
    }
  };
};

////////// Отправка формы //////////
export const useTaskFormSubmit = () => {
  const editedTask = useAtomValue(editedTaskAtom);

  const create = useCreateTask();
  const update = useUpdateTask();

  const setValidationErrors = useSetAtom(validationErrorsAtom);

  return (formData: TTaskFormData): boolean => {
    // Вадилация данных
    const result = taskSchema.safeParse(formData);
    if (!result.success) {
      const errors = Object.fromEntries(
        result.error.issues.map((issue) => [issue.path[0], issue.message]),
      ) as TTaskValidationError;

      setValidationErrors(errors);

      return false;
    } else {
      setValidationErrors({});
    }

    if (editedTask) {
      const { id, createdAt, ...rest } = editedTask;
      const dirtyFields = getDirtyFields(rest, formData);

      // Ничего не изменилось
      if (Object.keys(dirtyFields).length === 0) {
        return true;
      }

      update(id, dirtyFields);
    } else {
      create(formData);
    }

    return true;
  };
};
