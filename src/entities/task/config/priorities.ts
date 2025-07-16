import type { TagKind } from '@admiral-ds/react-ui';

import type { TTaskPriority } from '../model/types';

export const TASK_PRIORITIES = ['High', 'Medium', 'Low'] as const;

export const PRIORITY_LABELS: Record<TTaskPriority, string> = {
  High: 'High',
  Medium: 'Medium',
  Low: 'Low',
};

export const PRIORITY_KINDS: Record<TTaskPriority, TagKind> = {
  High: 'danger',
  Medium: 'primary',
  Low: 'success',
};
