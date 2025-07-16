import { z } from 'zod';

import { TASK_CATEGORIES } from '../config/categories';
import { TASK_PRIORITIES } from '../config/priorities';
import { TASK_STATUSES } from '../config/statuses';
import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from './consts';

export const taskSchema = z.object({
  title: z
    .string()
    .nonempty('Title is required')
    .max(MAX_TITLE_LENGTH, `Title must be shorter then ${MAX_TITLE_LENGTH} characters`),
  description: z
    .string()
    .max(
      MAX_DESCRIPTION_LENGTH,
      `Description must be shorter then ${MAX_DESCRIPTION_LENGTH} characters`,
    )
    .transform((value) => (value.trim() === '' ? null : value))
    .optional()
    .nullable(),
  category: z.enum(TASK_CATEGORIES),
  status: z.enum(TASK_STATUSES),
  priority: z.enum(TASK_PRIORITIES),
});
