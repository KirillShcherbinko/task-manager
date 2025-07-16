import { useNavigate } from 'react-router';

import { ServicePlusOutline } from '@admiral-ds/icons';

import { ActionButton } from '@/shared';

export const CreateTaskButton = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/task/new');
  return <ActionButton onClick={handleClick} icon={<ServicePlusOutline />} />;
};
