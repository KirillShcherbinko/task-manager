import { z } from 'zod';

import type { TASK_CATEGORIES } from '../config/categories';
import type { TASK_PRIORITIES } from '../config/priorities';
import type { TASK_STATUSES } from '../config/statuses';
import type { taskSchema } from './schemas';

export type TTaskCategory = (typeof TASK_CATEGORIES)[number];
export type TTaskStatus = (typeof TASK_STATUSES)[number];
export type TTaskPriority = (typeof TASK_PRIORITIES)[number];

export type TTask = {
  id: number;
  title: string;
  description?: string | null;
  category: TTaskCategory;
  status: TTaskStatus;
  priority: TTaskPriority;
  createdAt: Date;
};

export type TTaskFormData = z.infer<typeof taskSchema>;

export type TTaskValidationError = Partial<Record<keyof TTaskFormData, string>>;
export type TTaskActionError = string;
