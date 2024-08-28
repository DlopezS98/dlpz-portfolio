export enum SocialMedia {
  GITHUB = 'GitHub',
  TWITTER = 'Twitter',
  FACEBOOK = 'Facebook',
  EMAIL = 'Email',
}

export interface KeyValue<TValue = string> {
  key: string;
  value: TValue;
}

export type ObjectKeys<T> = keyof T;

export interface TypeOfMap {
  string: string;
  number: number;
  boolean: boolean;
  object: object;
  bigint: bigint;
  symbol: symbol;
  undefined: undefined;
  function: Function;
}

export type Sentinel = ObjectKeys<TypeOfMap>;
export type GuardedType<T extends Sentinel> = TypeOfMap[T];
