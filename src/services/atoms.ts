import type { TTask, TTaskCategory, TTaskPriority, TTaskStatus } from '@/components/task-item';
import { initialTasks } from '@/data';
import { atom } from 'jotai';

export const tasksAtom = atom<TTask[]>(initialTasks);
export const editedTaskAtom = atom<TTask | null>(null);

////////// Действия над списком задач //////////
export const createTaskAtom = atom(null, (_get, set, newTask: TTask) => {
  set(tasksAtom, (tasks) => [...tasks, newTask]);
});

export const deleteTaskAtom = atom(null, (_get, set, taskToDeleteId: number) => {
  set(tasksAtom, (tasks) => tasks.filter((task) => task.id !== taskToDeleteId));
});

export const updateTaskAtom = atom(
  null,
  (_get, set, taskToUpdateId: number, newTaskData: Partial<TTask>) => {
    set(tasksAtom, (tasks) =>
      tasks.map((task) => (task.id === taskToUpdateId ? { ...task, ...newTaskData } : task)),
    );
  },
);

////////// Фильтрация задач //////////
export const titleFilterAtom = atom<string>('');
export const categoryFilterAtom = atom<TTaskCategory[]>([]);
export const statusFilterAtom = atom<TTaskStatus[]>([]);
export const priorityFilterAtom = atom<TTaskPriority[]>([]);

export const filteredTasksAtom = atom<TTask[]>((get) => {
  const tasks = get(tasksAtom);

  const titleFilterValue = get(titleFilterAtom).trim().toLocaleLowerCase();
  const categoryFilterValue = get(categoryFilterAtom);
  const statusFilterValue = get(statusFilterAtom);
  const priorutyFilterValue = get(priorityFilterAtom);

  return tasks.filter((task) => {
    const titleMatches = titleFilterValue === '' || task.title.includes(titleFilterValue);
    const categoryMatches =
      categoryFilterValue.length === 0 ||
      categoryFilterValue.some((category) => category === task.category);
    const statusMatches =
      statusFilterValue.length === 0 || statusFilterValue.some((status) => status === task.status);
    const priorityMatches =
      priorutyFilterValue.length === 0 ||
      priorutyFilterValue.some((priority) => priority === task.priority);

    return titleMatches && categoryMatches && statusMatches && priorityMatches;
  });
});

////////// Ошибки //////////
export const titleErrorAtom = atom<string>('');
export const descriptionErrorAtom = atom<string>('');
