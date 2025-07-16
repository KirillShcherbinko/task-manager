import { axiosInstance } from '@/shared';

import type { TTask, TTaskFormData } from '../model/types';

export const fetchTasks = async (): Promise<TTask[]> => {
  const result = await axiosInstance.get('/tasks');
  return result.data;
};

export const createTask = async (newTask: TTaskFormData): Promise<TTask> => {
  const result = await axiosInstance.post('/tasks/new', newTask);
  return result.data;
};

export const updateTask = async (
  taskId: number,
  newTaskData: Partial<TTaskFormData>,
): Promise<TTask> => {
  const result = await axiosInstance.patch(`/tasks/${taskId}`, newTaskData);
  return result.data;
};

export const deleteTask = async (taskId: number): Promise<void> => {
  await axiosInstance.delete(`/tasks/${taskId}`);
};
