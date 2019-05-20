const strCamelToSnake = (str: string): string => str.replace(/([A-Z])/g, (s: string) => '_' + s.charAt(0).toLowerCase());
const strCamelToKebab = (str: string): string => str.replace(/([A-Z])/g, (s: string) => '-' + s.charAt(0).toLowerCase());
const strCamelToPascal = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
const strSnakeToCamel = (str: string): string => str.replace(/_./g, (s: string) => s.charAt(1).toUpperCase());
const strSnakeToKebab = (str: string): string => strCamelToKebab(strSnakeToCamel(str));
const strSnakeToPascal = (str: string): string => strCamelToPascal(strSnakeToCamel(str));
const strKebabToCamel = (str: string): string => str.replace(/-./g, (s: string) => s.charAt(1).toUpperCase());
const strKebabToSnake = (str: string): string => strCamelToSnake(strKebabToCamel(str));
const strKebabToPascal = (str: string): string => strCamelToPascal(strKebabToCamel(str));
const strPascalToCamel = (str: string): string => str.charAt(0).toLowerCase() + str.slice(1);
const strPascalToSnake = (str: string): string => strCamelToSnake(strPascalToCamel(str));
const strPascalToKebab = (str: string): string => strCamelToKebab(strPascalToCamel(str));

const formatter = (target: string | object, converter: (str: string) => string): string | object | Error => {
  switch (typeof target) {
    case 'string':
      return converter(target);
    case 'object':
      return Object.keys(target).reduce((acc, cv) => ({ ...acc, ...{ [converter(cv)]: target[cv] } }), {});
    default:
      return new Error('Failed to convert.');
  }
}

export const camelToSnake = (target: string | object) => formatter(target, strCamelToSnake);
export const camelToPascal = (target: string | object) => formatter(target, strCamelToPascal);
export const camelToKebab = (target: string | object) => formatter(target, strCamelToKebab);

export const snakeToCamel = (target: string | object) => formatter(target, strSnakeToCamel);
export const snakeToPascal = (target: string | object) => formatter(target, strSnakeToPascal);
export const snakeToKebab = (target: string | object) => formatter(target, strSnakeToKebab);

export const kebabToCamel = (target: string | object) => formatter(target, strKebabToCamel);
export const kebabToSnake = (target: string | object) => formatter(target, strKebabToSnake);
export const kebabToPascal = (target: string | object) => formatter(target, strKebabToPascal);

export const pascalToCamel = (target: string | object) => formatter(target, strPascalToCamel);
export const pascalToSnake = (target: string | object) => formatter(target, strPascalToSnake);
export const pascalToKebab = (target: string | object) => formatter(target, strPascalToKebab);
