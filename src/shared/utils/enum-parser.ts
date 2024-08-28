import Guard from "../guards/type.guard";
import { ObjectKeys } from "../typings";

export default class EnumParser {
  static getFromValue<TEnum extends Record<string, string | number>>(object: TEnum, value: string | number): TEnum {
    if (Guard.isNullOrUndefined(object)) throw new Error('The object is null or undefined.');
    if (!Guard.isRecord(object)) throw new Error('The object is not an object.');

    const keys = Object.keys(object).filter(key => isNaN(Number(key))) as ObjectKeys<TEnum>[];
    const key = keys.find(key => object[key] === value);
    if (Guard.isNullOrUndefined(key)) throw new Error(`The value ${String(value)} is not a valid value of the enum.`);

    return object[key] as unknown as TEnum;
  }
}
