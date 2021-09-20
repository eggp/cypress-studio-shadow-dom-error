export function isEmptyString(arg: any): boolean {
  return typeof arg === 'string' && arg.length === 0;
}
