import { descriptionErrorAtom, editedTaskAtom, titleErrorAtom } from '@/services/atoms';
import { useAtom } from 'jotai';

import { type ChangeEvent, type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button, InputField, Option, SelectField, TextField } from '@admiral-ds/react-ui';

import { useTaskDetailSubmit } from '../lib/hooks';
import {
  EDIT_MODE,
  categoryOptions,
  defaultValues,
  priorityOptions,
  statusOptions,
} from '../model/consts';
import type { TTaskDetailForm, TTaskDetailMode } from '../model/types';
import Style from './TaskDetail.module.css';

interface ITaskDetailProps {
  mode: TTaskDetailMode;
}

export const TaskDetail = ({ mode }: ITaskDetailProps) => {
  const navigate = useNavigate();

  const handleSubmit = useTaskDetailSubmit();

  const [editedTask, setEditedTask] = useAtom(editedTaskAtom);

  const [titleError, setTitleError] = useAtom(titleErrorAtom);
  const [descriptionError, setDescriptionError] = useAtom(descriptionErrorAtom);

  const initialValue =
    editedTask && mode === EDIT_MODE ? (({ id, ...rest }) => rest)(editedTask) : defaultValues;

  const [formData, setFormData] = useState<TTaskDetailForm>(initialValue);
  const { title, description, category, status, priority } = formData;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialValue);

    setTitleError('');
    setDescriptionError('');
  };
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const isSuccess = handleSubmit(mode, formData);

    if (!isSuccess) return;

    navigate(-1);

    if (editedTask) {
      setEditedTask(null);
    }
  };

  return (
    <form className={Style.Form} onSubmit={onSubmit} onReset={handleReset}>
      <InputField
        data-container-id="titleInput"
        name="title"
        label="Title"
        status={titleError ? 'error' : undefined}
        extraText={titleError}
        value={title}
        onChange={handleChange}
      />
      <TextField
        data-container-id="descriptionInput"
        name="description"
        label="Description"
        extraText={descriptionError}
        value={description}
        onChange={handleChange}
      />
      <SelectField
        data-container-id="categorySelect"
        name="category"
        label="Category"
        mode="select"
        value={category}
        onChange={handleChange}
      >
        {categoryOptions.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectField>
      <SelectField
        data-container-id="statusSelect"
        name="status"
        label="Status"
        mode="select"
        value={status}
        onChange={handleChange}
      >
        {statusOptions.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectField>
      <SelectField
        data-container-id="prioritySelect"
        name="priority"
        label="Priority"
        mode="select"
        value={priority}
        onChange={handleChange}
      >
        {priorityOptions.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectField>
      <div className={Style.ButtonGroup}>
        <Button type="reset" appearance="tertiary">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};
