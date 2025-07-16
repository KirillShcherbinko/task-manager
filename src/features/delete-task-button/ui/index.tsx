import { SystemDeleteSolid } from '@admiral-ds/icons';

import { ActionButton } from '@/shared';

import { useDeleteTask } from '../lib/hooks';

type TDeleteTaskButtonProps = {
  taskId: number;
};

export const DeleteTaskButton = ({ taskId }: TDeleteTaskButtonProps) => {
  const handleClick = useDeleteTask();
  return (
    <ActionButton
      appearance="danger"
      onClick={() => handleClick(taskId)}
      icon={<SystemDeleteSolid />}
    />
  );
};
