import { useAtom, useAtomValue } from 'jotai';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, InputField, Option, SelectField, TextField } from '@admiral-ds/react-ui';

import { type TTaskFormData, editedTaskAtom, validationErrorsAtom } from '@/entities/task';

import Style from './ui.module.css';

import { INPUT_PROPS, TEXTAREA_PROPS } from '../config/inputs';
import { getSelectFieldsConfig } from '../config/selects';
import { useTaskFormSubmit } from '../lib/hooks';
import { defaultValues } from '../model/consts';

export const TaskForm = () => {
  // Получение необходимых данных
  const navigate = useNavigate();
  const handleSubmit = useTaskFormSubmit();
  const [editedTask, setEditedTask] = useAtom(editedTaskAtom);
  const validationErrors = useAtomValue(validationErrorsAtom);

  // Получение данных формы
  const initialValue = editedTask
    ? (({ id, createdAt, ...rest }) => rest)(editedTask)
    : defaultValues;

  const [formData, setFormData] = useState<TTaskFormData>(initialValue);
  const { title, description } = formData;

  // Обработка изменений
  const selectFieldConfig = getSelectFieldsConfig(formData, validationErrors);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = event.target;

    const selectConfig = selectFieldConfig.find((config) => config.props.name === name);
    if (!selectConfig) return;

    setFormData((prev) => ({ ...prev, [name]: selectConfig.reversedLabels[value] }));
  };

  // Отправка формы
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isSuccess = handleSubmit(formData);
    if (!isSuccess) return;

    navigate(-1);

    if (editedTask) {
      setEditedTask(null);
    }
  };

  return (
    <form className={Style.Form} onSubmit={onSubmit}>
      <InputField
        className={Style.Input}
        {...INPUT_PROPS}
        status={validationErrors.title ? 'error' : undefined}
        extraText={validationErrors.title}
        value={title}
        onChange={handleInputChange}
      />

      <TextField
        className={Style.Input}
        {...TEXTAREA_PROPS}
        status={validationErrors.description ? 'error' : undefined}
        extraText={validationErrors.description}
        value={description || ''}
        onChange={handleInputChange}
      />

      {selectFieldConfig.map((selectField) => (
        <SelectField
          key={selectField.props['data-container-id']}
          className={Style.Input}
          {...selectField.props}
          mode="select"
          status={selectField.error ? 'error' : undefined}
          extraText={selectField.error}
          value={selectField.value}
          onChange={handleSelectChange}
        >
          {selectField.options.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>
      ))}

      <div className={Style.ButtonGroup}>
        <Button appearance="tertiary" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
