import { TaskDetail } from '@/components/task-detail';

import { Link } from 'react-router';

import { Button, T } from '@admiral-ds/react-ui';

import Style from './AddPage.module.css';

export const AddTaskPage = () => {
  return (
    <div className={Style.AddPage}>
      <T className={Style.Title} as="h1" font="Additional/L-bold">
        <p>Add Task</p>
      </T>
      <TaskDetail mode="add" />
      <Link to="/">
        <Button className={Style.HomeButton}>Home</Button>
      </Link>
    </div>
  );
};
