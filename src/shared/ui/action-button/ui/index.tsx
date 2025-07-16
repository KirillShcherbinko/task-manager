import type { MouseEvent, ReactNode } from 'react';

import { Button, type ButtonAppearance } from '@admiral-ds/react-ui';

type TActioButtonProps = {
  icon: ReactNode;
  appearance?: ButtonAppearance;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
};

export const ActionButton = ({ icon, appearance = 'tertiary', onClick }: TActioButtonProps) => {
  return (
    <Button
      appearance={appearance}
      dimension="s"
      onClick={onClick}
      displayAsSquare
      iconStart={icon}
    />
  );
};
