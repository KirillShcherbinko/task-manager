import type { MouseEvent, ReactNode } from 'react';

import { Button, type ButtonAppearance } from '@admiral-ds/react-ui';

interface IActioButtonProps {
  icon: ReactNode;
  appearance?: ButtonAppearance;
  onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

export const ActionButton = ({
  icon,
  appearance = 'tertiary',
  onClick,
  className,
  disabled = false,
}: IActioButtonProps) => {
  return (
    <Button
      className={className}
      appearance={appearance}
      dimension="s"
      onClick={onClick}
      displayAsSquare
      iconStart={icon}
      disabled={disabled}
    />
  );
};
