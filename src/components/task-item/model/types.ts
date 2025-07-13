export type TTaskCategory = 'epic' | 'story' | 'task' | 'sub-task' | 'bug';

export type TTaskStatus = 'to do' | 'in progress' | 'in review' | 'done';

export type TTaskPriority = 'highest' | 'high' | 'medium' | 'low' | 'lowest';

export type TTaskItem = {
  id: number;
  title: string;
  description?: string;
  category: TTaskCategory;
  status: TTaskStatus;
  priority: TTaskPriority;
};
