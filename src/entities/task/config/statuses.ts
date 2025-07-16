import type { TagKind } from '@admiral-ds/react-ui';

import type { TTaskStatus } from '../model/types';

export const TASK_STATUSES = ['ToDo', 'InProgress', 'Done'] as const;

export const STATUS_LABELS: Record<TTaskStatus, string> = {
  ToDo: 'To Do',
  InProgress: 'In Progress',
  Done: 'Done',
};

export const STATUS_KINDS: Record<TTaskStatus, TagKind> = {
  ToDo: 'danger',
  InProgress: 'primary',
  Done: 'success',
};
