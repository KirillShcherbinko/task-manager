import type { ElementType, JSX, ReactNode } from 'react';

import { T, Tag, type TagKind } from '@admiral-ds/react-ui';

type TIconTagProps = {
  as?: ElementType<any, keyof JSX.IntrinsicElements>;
  kind?: TagKind;
  icon: ReactNode;
  isBorderHidden?: boolean;
  children?: ReactNode;
};

export const IconTag = ({
  as = 'div',
  kind = 'neutral',
  icon,
  isBorderHidden = true,
  children,
}: TIconTagProps) => {
  return (
    <Tag as={as} statusViaBackground kind={kind} icon={icon} isBorderHidden={isBorderHidden}>
      <T as="p" font="Additional/S-bold">
        {children}
      </T>
    </Tag>
  );
};
