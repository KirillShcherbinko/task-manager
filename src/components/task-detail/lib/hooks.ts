import {
  createTaskAtom,
  descriptionErrorAtom,
  editedTaskAtom,
  titleErrorAtom,
  updateTaskAtom,
} from '@/services/atoms';
import { useAtomValue, useSetAtom } from 'jotai';

import { generateNumericId, getDirtyFields } from '@/shared';

import { ADD_MODE, EDIT_MODE } from '../model/consts';
import type { TTaskDetailForm, TTaskDetailMode } from '../model/types';
import { validateDescription, validateTitle } from './utils';

export const useTaskDetailSubmit = () => {
  const editedTask = useAtomValue(editedTaskAtom);
  const setTitleError = useSetAtom(titleErrorAtom);
  const setDescriptionError = useSetAtom(descriptionErrorAtom);

  const createTask = useSetAtom(createTaskAtom);
  const updateTask = useSetAtom(updateTaskAtom);

  return (mode: TTaskDetailMode, formData: TTaskDetailForm) => {
    const { title, description } = formData;

    // Вадилация данных
    const titleError = validateTitle(title);
    const descriptionError = validateDescription(description);

    if (titleError || descriptionError) {
      setTitleError(titleError);
      setDescriptionError(descriptionError);

      return false;
    }

    // Отправка данных
    switch (mode) {
      case ADD_MODE: {
        const id = generateNumericId();
        createTask({ id, ...formData });

        return true;
      }
      case EDIT_MODE: {
        if (!editedTask) {
          return false;
        }

        const { id } = editedTask;
        const dirtyFields = getDirtyFields(editedTask, { id, ...formData });
        updateTask(id, dirtyFields);

        return true;
      }
      default: {
        throw new Error('Unexpected mode value');
      }
    }
  };
};
