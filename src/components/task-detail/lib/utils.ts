import {
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
  descriptionMessages,
  titleMessages,
} from '../model/consts';

export const validateTitle = (title: string) => {
  if (title.length === 0) {
    return titleMessages.noempty;
  } else if (title.length > MAX_TITLE_LENGTH) {
    return titleMessages.max;
  }

  return '';
};

export const validateDescription = (description: string | undefined) => {
  if (description && description.length > MAX_DESCRIPTION_LENGTH) {
    return descriptionMessages.max;
  }

  return '';
};
