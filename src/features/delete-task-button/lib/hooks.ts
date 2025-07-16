import { useAtom, useSetAtom } from 'jotai';

import { deleteTask, deleteTaskAtom, tasksAtom } from '@/entities/task';

export const useDeleteTask = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const deleteTaskState = useSetAtom(deleteTaskAtom);

  return async (taskId: number) => {
    const prevState = [...tasks];

    deleteTaskState(taskId);

    try {
      await deleteTask(taskId);
    } catch (error) {
      setTasks(prevState);
      // Установка значения сообщения об ошибке
    }
  };
};
