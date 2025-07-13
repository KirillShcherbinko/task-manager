import { TaskItem } from '@/components/task-item';

export const HomePage = () => {
  return (
    <>
      <TaskItem
        task={{ id: 1, title: 'hello', category: 'epic', status: 'done', priority: 'high' }}
      />
    </>
  );
};
