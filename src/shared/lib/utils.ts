import isEqual from 'lodash-es/isEqual';
import { customAlphabet } from 'nanoid';

export const getDirtyFields = <T extends Record<string, unknown>>(
  original: T,
  current: T,
): Partial<T> => {
  const changes: Partial<T> = {};

  for (const key in current) {
    if (!(key in original) || !isEqual(current[key], original[key])) {
      changes[key] = current[key];
    }
  }

  return changes;
};

export const generateNumericId = () => {
  const nanoid = customAlphabet('0123456789');
  return Number(nanoid());
};

export const createReverseObject = <T extends Record<string, string>>(labels: T) =>
  Object.fromEntries(Object.entries(labels).map(([key, value]) => [value, key]));
