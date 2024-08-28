import { GuardedType, Sentinel } from '../typings';

export default class Guard {
  static isOfType<T extends Sentinel>(sentinel: T, value: unknown): value is GuardedType<T> {
    return typeof value === sentinel;
  }

  static isString(value: unknown): value is string {
    return Guard.isOfType('string', value);
  }

  static isNumber(value: unknown): value is number {
    return Guard.isOfType('number', value);
  }

  static isRecord(value: unknown): value is Record<string, unknown> {
    return Guard.isOfType('object', value);
  }

  static isNullOrUndefined(value: unknown): value is null | undefined {
    return value === null || value === undefined;
  }

  static isNullOrEmpty(value: unknown): value is null | undefined | '' {
    return Guard.isNullOrUndefined(value) || value === '';
  }
}
