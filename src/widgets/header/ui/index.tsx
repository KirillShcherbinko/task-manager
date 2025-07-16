import { T } from '@admiral-ds/react-ui';

import { CreateTaskButton } from '@/features/create-task-button';
import { TaskFilters } from '@/features/task-filters';

import Style from './ui.module.css';

export const Header = () => {
  return (
    <header className={Style.Header}>
      <div className={Style.HeaderContainer}>
        <div className={Style.Info}>
          <T as="h1" font="Header/H3">
            Tasks
          </T>
          <CreateTaskButton />
        </div>
        <TaskFilters />
      </div>
    </header>
  );
};
