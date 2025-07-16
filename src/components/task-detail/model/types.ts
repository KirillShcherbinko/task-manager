import type { TTask } from '@/components/task-item';

export type TTaskDetailMode = 'add' | 'edit';

export type TTaskDetailForm = Omit<TTask, 'id'>;
