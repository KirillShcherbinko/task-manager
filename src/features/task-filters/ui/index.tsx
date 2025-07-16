import { useSetAtom } from 'jotai';

import { categoryFilterAtom, priorityFilterAtom, statusFilterAtom } from '@/entities/task';

import { CheckboxDropMenu } from '@/shared';

import Style from './ui.module.css';

export const TaskFilters = () => {
  const setCategoryFilter = useSetAtom(categoryFilterAtom);
  const setStatusFilter = useSetAtom(statusFilterAtom);
  const setPriorityFilter = useSetAtom(priorityFilterAtom);

  return (
    <div className={Style.Filter}>
      <CheckboxDropMenu
        label="Category"
        items={['Bug', 'Feature', 'Documentation', 'Refactor', 'Test']}
        onSelectionChange={setCategoryFilter}
      />
      <CheckboxDropMenu
        label="Status"
        items={['ToDo', 'InProgress', 'Done']}
        onSelectionChange={setStatusFilter}
      />
      <CheckboxDropMenu
        label="Priority"
        items={['Low', 'Medium', 'High']}
        onSelectionChange={setPriorityFilter}
      />
    </div>
  );
};
