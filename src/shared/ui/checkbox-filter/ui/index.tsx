import { type Ref, useMemo, useState } from 'react';

import {
  Button,
  DropMenu,
  MenuItemWithCheckbox,
  type RenderOptionProps,
} from '@admiral-ds/react-ui';

interface ICheckboxFilterProps<T = string> {
  items: T[];
  onSelectionChange: (selectedItems: T[]) => void;
  label?: string;
}

export const CheckboxFilter = <T extends string>({
  label,
  items,
  onSelectionChange,
}: ICheckboxFilterProps<T>) => {
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <DropMenu
      items={model}
      onSelectItem={handleSelect}
      isVisible={isOpen}
      onVisibilityChange={setIsOpen}
      onClickOutside={() => setIsOpen(false)}
      disableSelectedOptionHighlight={true}
      renderContentProp={({ buttonRef }) => (
        <Button ref={buttonRef as Ref<HTMLButtonElement>} dimension="m" onClick={toggleMenu}>
          {label}
        </Button>
      )}
    ></DropMenu>
  );
};
