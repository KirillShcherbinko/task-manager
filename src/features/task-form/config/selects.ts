import {
  CATEGORY_LABELS,
  PRIORITY_LABELS,
  STATUS_LABELS,
  TASK_CATEGORIES,
  TASK_PRIORITIES,
  TASK_STATUSES,
  type TTaskFormData,
} from '@/entities/task';

import { createReverseObject } from '@/shared';

export const REVERSE_CATEGORY_LABELS = createReverseObject(CATEGORY_LABELS);
export const REVERSE_STATUS_LABELS = createReverseObject(STATUS_LABELS);
export const REVERSE_PRIORITY_LABELS = createReverseObject(PRIORITY_LABELS);

export const getSelectFieldsConfig = (
  formData: TTaskFormData,
  validationErrors: Record<string, string>,
) => [
  {
    props: {
      'data-container-id': 'categorySelect',
      'name': 'category',
      'label': 'Category',
    },
    mode: 'select',
    options: TASK_CATEGORIES,
    reversedLabels: REVERSE_CATEGORY_LABELS,
    value: CATEGORY_LABELS[formData.category],
    error: validationErrors.category,
  },
  {
    props: {
      'data-container-id': 'statusSelect',
      'name': 'status',
      'label': 'Status',
    },
    mode: 'select',
    options: TASK_STATUSES,
    reversedLabels: REVERSE_STATUS_LABELS,
    value: STATUS_LABELS[formData.status],
    error: validationErrors.status,
  },
  {
    props: {
      'data-container-id': 'prioritySelect',
      'name': 'priority',
      'label': 'Priority',
    },
    mode: 'select',
    options: TASK_PRIORITIES,
    reversedLabels: REVERSE_PRIORITY_LABELS,
    value: PRIORITY_LABELS[formData.priority],
    error: validationErrors.priority,
  },
];
