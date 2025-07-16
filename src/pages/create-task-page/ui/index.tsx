import { T } from '@admiral-ds/react-ui';

import { TaskForm } from '@/features/task-form';

import Style from './ui.module.css';

export const CreateTaskPage = () => {
  return (
    <div className={Style.AddPage}>
      <T className={Style.Title} as="h1" font="Additional/L-bold">
        Add Task
      </T>
      <TaskForm />
    </div>
  );
};
