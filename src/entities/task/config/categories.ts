import { type ReactNode, createElement } from 'react';

import {
  CategoryBugSolid,
  DocumentsDescriptionSolid,
  ServiceCheckSolid,
  SystemAdminSolid,
  SystemStarSolid,
} from '@admiral-ds/icons';

import type { TTaskCategory } from '../model/types';

export const TASK_CATEGORIES = ['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'] as const;

export const CATEGORY_LABELS: Record<TTaskCategory, string> = {
  Bug: 'Bug',
  Feature: 'Feature',
  Documentation: 'Documentation',
  Refactor: 'Refactor',
  Test: 'Test',
};

export const CATEGORY_ICONS: Record<TTaskCategory, ReactNode> = {
  Bug: createElement(CategoryBugSolid),
  Feature: createElement(SystemStarSolid),
  Documentation: createElement(DocumentsDescriptionSolid),
  Refactor: createElement(SystemAdminSolid),
  Test: createElement(ServiceCheckSolid),
};
