const strCamelToSnake = (str: string): string =>
  str.replace(/([A-Z])/g, (s: string) => "_" + s.charAt(0).toLowerCase());
const strCamelToKebab = (str: string): string =>
  str.replace(/([A-Z])/g, (s: string) => "-" + s.charAt(0).toLowerCase());
const strCamelToPascal = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);
const strSnakeToCamel = (str: string): string =>
  str.replace(/_./g, (s: string) => s.charAt(1).toUpperCase());
const strSnakeToKebab = (str: string): string =>
  strCamelToKebab(strSnakeToCamel(str));
const strSnakeToPascal = (str: string): string =>
  strCamelToPascal(strSnakeToCamel(str));
const strKebabToCamel = (str: string): string =>
  str.replace(/-./g, (s: string) => s.charAt(1).toUpperCase());
const strKebabToSnake = (str: string): string =>
  strCamelToSnake(strKebabToCamel(str));
const strKebabToPascal = (str: string): string =>
  strCamelToPascal(strKebabToCamel(str));
const strPascalToCamel = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1);
const strPascalToSnake = (str: string): string =>
  strCamelToSnake(strPascalToCamel(str));
const strPascalToKebab = (str: string): string =>
  strCamelToKebab(strPascalToCamel(str));

type Result<
  T extends Record<string, unknown> | string,
  U extends Record<string, unknown> = Record<string, unknown>
> = T extends Record<string, unknown> ? U : string;

function formatter<T extends Record<string, unknown> | string>(
  target: T,
  converter: (str: string) => string
) {
  if (typeof target === "string") {
    return converter(target) as any;
  }
  return Object.keys(target).reduce(
    (acc, cv) => ({ ...acc, ...{ [converter(cv)]: target[cv] } }),
    {} as any
  );
}

// from camel
export const camelToSnake = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strCamelToSnake);
export const camelToPascal = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strCamelToPascal);
export const camelToKebab = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strCamelToKebab);
// from snake
export const snakeToCamel = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strSnakeToCamel);
export const snakeToPascal = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strSnakeToPascal);
export const snakeToKebab = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strSnakeToKebab);
// from pascal
export const pascalToCamel = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strPascalToCamel);
export const pascalToSnake = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strPascalToSnake);
export const pascalToKebab = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strPascalToKebab);
// from kebab
export const kebabToCamel = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strKebabToCamel);
export const kebabToSnake = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strKebabToSnake);
export const kebabToPascal = <
  T extends Record<string, unknown> = Record<string, unknown>,
  U extends string | Record<string, unknown> = Record<string, unknown>
>(
  target: U
): Result<U, T> => formatter<U>(target, strKebabToPascal);
