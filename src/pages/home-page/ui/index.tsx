import { TaskItem } from '@/components/task-item';

export const HomePage = () => {
  return (
    <>
      <TaskItem
        task={{
          id: 1,
          title: 'hello',
          description:
            'weojweiowekhwehuwheuihweufhweufhwuiehfwuefhwueifhweiofhweuifhweufhweufhweufowefw wejhwehwuerhweurhweurhweweohwe',
          category: 'Bug',
          status: 'Done',
          priority: 'High',
        }}
      />
    </>
  );
};
