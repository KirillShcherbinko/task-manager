import type { TTaskItem } from '@/components/task-item';

export type TTaskDetailMode = 'add' | 'edit';

export type TTaskDetailForm = Omit<TTaskItem, 'id'>;
