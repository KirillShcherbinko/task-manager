import { categoryFilterAtom, priorityFilterAtom, statusFilterAtom } from '@/services/atoms';
import { useSetAtom } from 'jotai';

import { useNavigate } from 'react-router';

import { ServicePlusOutline } from '@admiral-ds/icons';
import { T } from '@admiral-ds/react-ui';

import { ActionButton, CheckboxFilter } from '@/shared';

import Style from './TaskFilter.module.css';

export const TaskFilter = () => {
  const navigate = useNavigate();

  const setCategoryFilter = useSetAtom(categoryFilterAtom);
  const setStatusFilter = useSetAtom(statusFilterAtom);
  const setPriorityFilter = useSetAtom(priorityFilterAtom);

  return (
    <header className={Style.Header}>
      <div className={Style.Info}>
        <T font="Additional/L-bold">Tasks</T>
        <ActionButton icon={<ServicePlusOutline />} onClick={() => navigate('add/task')} />
      </div>
      <div className={Style.Filter}>
        <CheckboxFilter
          label="Category"
          items={['Bug', 'Feature', 'Documentation', 'Refactor', 'Test']}
          onSelectionChange={setCategoryFilter}
        />
        <CheckboxFilter
          label="Status"
          items={['To Do', 'In Progress', 'Done']}
          onSelectionChange={setStatusFilter}
        />
        <CheckboxFilter
          label="Priority"
          items={['Low', 'Medium', 'High']}
          onSelectionChange={setPriorityFilter}
        />
      </div>
    </header>
  );
};
