import { SystemDeleteSolid } from '@admiral-ds/icons';
import { Flex, T } from '@admiral-ds/react-ui';

import type { TTaskItem } from '../model/types';
import Style from './index.module.css';

type ITaskItemProps = {
  task: TTaskItem;
};

export const TaskItem = ({ task }: ITaskItemProps) => {
  const { title, category } = task;

  return (
    <Flex.Container className={Style.Card} rowGap={3}>
      <Flex.Row columnGap={3}>
        <T as="p" font="Additional/L">
          {title}
        </T>
        <T as="p" font="Additional/L">
          {category}
        </T>
        <SystemDeleteSolid className={Style.Icon} />
      </Flex.Row>
    </Flex.Container>
  );
};
