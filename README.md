# case-formatter-js

Simple converters from case to case for string and Record.
It can canvert below cases each other.

- camel
- snake
- kebab
- pascal

## Usage

```
import caseFormatter from 'case-formatter';

caseFormatter.snakeToCamel('sample_text');
// => sampleText: string
caseFormatter.snakeToCamel({ sample_text: 123 });
// => { sampleText: 123 }: Record<string, unknown>
caseFormatter.snakeToCamel<{sampleText: number}>({ sample_text: 123 });
// => { sampleText: 123 }: {sampleText: number}
```

## Formatters

- camelToSnake
- camelToPascal
- camelToKebab
- snakeToCamel
- snakeToPascal
- snakeToKebab
- pascalToCamel
- pascalToSnake
- pascalToKebab
- kebabToCamel
- kebabToSnake
- kebabToPascal
