import { z } from 'zod';

import { MAX_DESCRIPTION_LENGTH, MAX_TITLE_LENGTH } from './consts';

export const taskSchema = z.object({
  title: z.string().nonempty().max(MAX_TITLE_LENGTH),
  description: z.string().max(MAX_DESCRIPTION_LENGTH).optional().nullable(),
});
