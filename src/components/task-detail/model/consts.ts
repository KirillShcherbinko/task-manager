import type { TTaskCategory, TTaskPriority, TTaskStatus } from '@/components/task-item';

import type { TTaskDetailForm } from './types';

export const MAX_TITLE_LENGTH = 50;
export const MAX_DESCRIPTION_LENGTH = 200;

export const ADD_MODE = 'add';
export const EDIT_MODE = 'edit';

export const titleMessages = {
  noempty: 'Title is required',
  max: `Title must be shorter then ${MAX_TITLE_LENGTH} symbols`,
};

export const descriptionMessages = {
  max: `Description must be shorter then ${MAX_DESCRIPTION_LENGTH} symbols`,
};

export const categoryOptions: TTaskCategory[] = [
  'Bug',
  'Feature',
  'Documentation',
  'Refactor',
  'Test',
];
export const statusOptions: TTaskStatus[] = ['To Do', 'In Progress', 'Done'];
export const priorityOptions: TTaskPriority[] = ['High', 'Medium', 'Low'];

export const defaultValues: TTaskDetailForm = {
  title: '',
  description: '',
  category: categoryOptions[0],
  status: statusOptions[0],
  priority: priorityOptions[0],
};
