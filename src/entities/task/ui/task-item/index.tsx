import type { ReactNode } from 'react';

import { SystemArrowUpOutline, SystemTimeOutline } from '@admiral-ds/icons';
import { Divider, T } from '@admiral-ds/react-ui';

import { IconTag } from '@/shared';

import Style from './ui.module.css';

import { CATEGORY_ICONS, CATEGORY_LABELS } from '../../config/categories';
import { PRIORITY_KINDS, PRIORITY_LABELS } from '../../config/priorities';
import { STATUS_KINDS, STATUS_LABELS } from '../../config/statuses';
import type { TTask } from '../../model/types';

type TTaskItemProps = {
  task: TTask;
  actionsSlot?: ReactNode[];
};

export const TaskItem = ({ task, actionsSlot }: TTaskItemProps) => {
  const { title, description, category, status, priority, createdAt } = task;

  const creationDate = new Date(createdAt).toDateString();

  return (
    <div className={Style.Card}>
      <header className={Style.Header}>
        <div className={Style.Title}>
          <T as="h3" font="Header/H5">
            {title}
          </T>
        </div>
        <div className={Style.ButtonGroup}>
          {actionsSlot?.map((action, index) => (
            <span key={index}>{action}</span>
          ))}
        </div>
      </header>

      <main className={Style.Main}>
        <T as="article" font="Additional/L">
          {description}
        </T>
        <T as="p" font="Additional/S" color="Neutral/Neutral 40">
          {creationDate}
        </T>
      </main>

      <Divider />

      <footer className={Style.Footer}>
        <IconTag icon={CATEGORY_ICONS[category]}>{CATEGORY_LABELS[category]}</IconTag>
        <IconTag kind={STATUS_KINDS[status]} icon={<SystemTimeOutline />}>
          {STATUS_LABELS[status]}
        </IconTag>
        <IconTag kind={PRIORITY_KINDS[priority]} icon={<SystemArrowUpOutline />}>
          {PRIORITY_LABELS[priority]}
        </IconTag>
      </footer>
    </div>
  );
};
