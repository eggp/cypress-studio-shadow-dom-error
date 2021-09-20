import { isBoolean } from './is-boolean';
import { isPresent } from './is-present';

export function isTrue(obj: any): boolean {
  if (isBoolean(obj)) {
    if ((obj as any) === 'true' || obj === true) {
      return true;
    }
  } else if (isPresent(obj)) {
    throw new Error('Object is not boolean');
  }
  return false;
}
