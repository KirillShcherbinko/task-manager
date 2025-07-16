import { useAtomValue, useSetAtom } from 'jotai';

import { useCallback, useEffect, useState } from 'react';

import { Spinner } from '@admiral-ds/react-ui';

import { TaskItem, fetchTasks, filteredTasksAtom, tasksAtom } from '@/entities/task';

import { DeleteTaskButton } from '@/features/delete-task-button';
import { UpdateTaskButton } from '@/features/update-task-button';

import Style from './ui.module.css';

export const TaskList = () => {
  const setTasks = useSetAtom(tasksAtom);
  const filteredTasks = useAtomValue(filteredTasksAtom);

  const [error, setError] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const tasks = await fetchTasks();
      setTasks(tasks);
    } catch (error) {
      setError('Network Error');
    } finally {
      setIsLoading(false);
    }
  }, [setTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  if (isLoading) return <Spinner dimension="l" />;
  if (error)
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={getTasks}>Retry</button>
      </div>
    );

  return (
    <div className={Style.List}>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          actionsSlot={[<UpdateTaskButton task={task} />, <DeleteTaskButton taskId={task.id} />]}
        />
      ))}
    </div>
  );
};
