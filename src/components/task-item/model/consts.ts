import { type ReactElement, createElement } from 'react';

import {
  CategoryBugSolid,
  DocumentsDescriptionSolid,
  ServiceCheckSolid,
  SystemAdminSolid,
  SystemStarSolid,
} from '@admiral-ds/icons';
import type { TagKind } from '@admiral-ds/react-ui';

import type { TTaskCategory, TTaskPriority, TTaskStatus } from './types';

//////// Константы для категорий //////////
export const CATEGORY_ICON_MAP: Record<TTaskCategory, ReactElement> = {
  Bug: createElement(CategoryBugSolid),
  Feature: createElement(SystemStarSolid),
  Documentation: createElement(DocumentsDescriptionSolid),
  Refactor: createElement(SystemAdminSolid),
  Test: createElement(ServiceCheckSolid),
};

////////// Константы для статуса //////////
export const STATUS_KIND_MAP: Record<TTaskStatus, TagKind> = {
  'To Do': 'danger',
  'In Progress': 'primary',
  'Done': 'success',
};

////////// Констатны для приоритетов //////////
export const PRIORITY_KIND_MAP: Record<TTaskPriority, TagKind> = {
  High: 'danger',
  Medium: 'primary',
  Low: 'success',
};
