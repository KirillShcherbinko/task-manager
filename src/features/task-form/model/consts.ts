import type { TTaskFormData } from '@/entities/task';

export const defaultValues: TTaskFormData = {
  title: '',
  description: null,
  category: 'Bug',
  status: 'Done',
  priority: 'High',
};
