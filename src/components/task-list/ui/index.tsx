import { TaskItem } from '@/components/task-item';
import { filteredTasksAtom } from '@/services/atoms';
import { useAtomValue } from 'jotai';

import Style from './TaskList.module.css';

export const TaskList = () => {
  const tasks = useAtomValue(filteredTasksAtom);

  return (
    <div className={Style.List}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
