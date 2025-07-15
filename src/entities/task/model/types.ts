import { z } from 'zod';

import type { taskSchema } from './schemas';

export type TTaskCategory = 'Bug' | 'Feature' | 'Documentation' | 'Refactor' | 'Test';
export type TTaskStatus = 'ToDo' | 'InProgress' | 'Done';
export type TTaskPriority = 'High' | 'Medium' | 'Low';

export type TTaskItem = {
  id: number;
  title: string;
  description?: string;
  category: TTaskCategory;
  status: TTaskStatus;
  priority: TTaskPriority;
  createdAt: Date;
};

export type TTaskFormData = z.infer<typeof taskSchema>;
