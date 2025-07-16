import { type MouseEvent, type Ref, type TouchEvent, useMemo, useState } from 'react';

import { SystemChevronDownOutline } from '@admiral-ds/icons';
import {
  Button,
  DropMenu,
  MenuItemWithCheckbox,
  type RenderOptionProps,
} from '@admiral-ds/react-ui';

type TCheckboxDropMenuProps<T = string> = {
  items: T[];
  onSelectionChange: (selectedItems: T[]) => void;
  label?: string;
};

export const CheckboxDropMenu = <T extends string>({
  label,
  items,
  onSelectionChange,
}: TCheckboxDropMenuProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<T[]>([]);

  const model = useMemo(() => {
    return items.map((item) => ({
      id: item,
      render: (options: RenderOptionProps) => (
        <MenuItemWithCheckbox
          key={item}
          id={item}
          checked={selectedItems.includes(item)}
          {...options}
        >
          {item}
        </MenuItemWithCheckbox>
      ),
    }));
  }, [items, selectedItems]);

  const handleSelect = (id: string) => {
    const selectedId = id as T;
    setSelectedItems((prev) => {
      const newSelection = prev.includes(selectedId)
        ? prev.filter((item) => item !== selectedId)
        : [...prev, selectedId];

      onSelectionChange(newSelection);
      return newSelection;
    });
  };

  const toggleMenu = (event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: Event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <DropMenu
      items={model}
      onSelectItem={handleSelect}
      isVisible={isOpen}
      onVisibilityChange={setIsOpen}
      onClickOutside={handleClickOutside}
      disableSelectedOptionHighlight={true}
      renderContentProp={({ buttonRef }) => (
        <Button
          ref={buttonRef as Ref<HTMLButtonElement>}
          appearance="ghost"
          dimension="s"
          onClick={toggleMenu}
          iconEnd={<SystemChevronDownOutline />}
        >
          {label}
        </Button>
      )}
    ></DropMenu>
  );
};
