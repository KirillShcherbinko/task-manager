import { useSetAtom } from 'jotai';

import { useNavigate } from 'react-router';

import { SystemEditSolid } from '@admiral-ds/icons';

import { type TTask, editedTaskAtom } from '@/entities/task';

import { ActionButton } from '@/shared';

type TUpdateTaskButtonProps = {
  task: TTask;
};

export const UpdateTaskButton = ({ task }: TUpdateTaskButtonProps) => {
  const navigate = useNavigate();

  const setEditedTask = useSetAtom(editedTaskAtom);

  const handleClick = () => {
    setEditedTask(task);
    navigate(`task/${task.id}`);
  };

  return <ActionButton onClick={handleClick} icon={<SystemEditSolid />} />;
};
