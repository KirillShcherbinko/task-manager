import { TaskDetail } from '@/components/task-detail';

import { Link } from 'react-router';

import { Button, T } from '@admiral-ds/react-ui';

import Style from './EditPage.module.css';

export const EditTaskPage = () => {
  return (
    <div className={Style.EditPage}>
      <T className={Style.Title} as="h1" font="Additional/L-bold">
        <p>Edit Task</p>
      </T>
      <TaskDetail mode="edit" />
      <Link to="/">
        <Button className={Style.HomeButton}>Home</Button>
      </Link>
    </div>
  );
};
