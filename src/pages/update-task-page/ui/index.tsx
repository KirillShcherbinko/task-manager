import { T } from '@admiral-ds/react-ui';

import { TaskForm } from '@/features/task-form';

import Style from './ui.module.css';

export const UpdateTaskPage = () => {
  return (
    <div className={Style.EditPage}>
      <T className={Style.Title} as="h1" font="Additional/L-bold">
        Edit Task
      </T>
      <TaskForm />
    </div>
  );
};
