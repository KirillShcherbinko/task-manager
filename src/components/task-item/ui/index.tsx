import { deleteTaskAtom, editedTaskAtom } from '@/services/atoms';
import { useSetAtom } from 'jotai';

import { useNavigate } from 'react-router';

import {
  SystemArrowUpOutline,
  SystemDeleteSolid,
  SystemEditSolid,
  SystemTimeOutline,
} from '@admiral-ds/icons';
import { Chips, Divider, T, Tag } from '@admiral-ds/react-ui';

import { ActionButton } from '@/shared';

import { CATEGORY_ICON_MAP, PRIORITY_KIND_MAP, STATUS_KIND_MAP } from '../model/consts';
import type { TTaskItem } from '../model/types';
import Style from './TaskItem.module.css';

export interface ITaskItemProps {
  task: TTaskItem;
}

export const TaskItem = ({ task }: ITaskItemProps) => {
  const { id, title, description, category, status, priority } = task;

  const deleteTask = useSetAtom(deleteTaskAtom);
  const setEditedTask = useSetAtom(editedTaskAtom);

  const navigate = useNavigate();

  const handleDeleteTask = () => deleteTask(id);
  const handleEditTask = () => {
    setEditedTask(task);
    navigate(`edit/task/${id}`);
  };

  const categoryIcon = CATEGORY_ICON_MAP[category];
  const statusKind = STATUS_KIND_MAP[status];
  const priorityKind = PRIORITY_KIND_MAP[priority];

  return (
    <div className={Style.Card}>
      <header className={Style.Header}>
        <div className={Style.Title}>
          <T as="h3" font="Additional/L-bold">
            {title}
          </T>
          <Chips appearance="filled" dimension="s" iconStart={categoryIcon}>
            {category}
          </Chips>
        </div>
        <div className={Style.ButtonGroup}>
          <ActionButton onClick={handleEditTask} icon={<SystemEditSolid />} />
          <ActionButton
            appearance="danger"
            onClick={handleDeleteTask}
            icon={<SystemDeleteSolid />}
          />
        </div>
      </header>
      <main className={Style.Main}>
        <T as="article" font="Additional/S">
          {description}
        </T>
      </main>
      <Divider />
      <footer className={Style.Footer}>
        <Tag statusViaBackground kind={statusKind} icon={<SystemTimeOutline />}>
          {status}
        </Tag>
        <Tag statusViaBackground kind={priorityKind} icon={<SystemArrowUpOutline />}>
          {priority}
        </Tag>
      </footer>
    </div>
  );
};
