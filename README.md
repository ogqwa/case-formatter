# case-formatter-js
Simple converter from case to case for string and object.
It can canvert below cases each other.
- camel
- snake
- kebab
- pascal

## Usage

```
const formatter = require('case-formatter');

formatter.snakeToCamel('sample_text');
// => sampleText
formatter.snakeToCamel({ sample_text: 123 });
// => { sampleText: 123 }
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
