import { Header } from '@/widgets/header';
import { TaskList } from '@/widgets/task-list';

import Style from './ui.module.css';

export const HomePage = () => {
  return (
    <main className={Style.HomePage}>
      <Header />
      <TaskList />
    </main>
  );
};
