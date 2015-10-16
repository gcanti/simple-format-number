A simple clean way to format numbers with Javascript

# Setup

```sh
npm install formatNumber
```

# Usage

```js
formatNumber(1000.342); // => 1,000.34
formatNumber(1000.342, { fractionDigits: 3 }): // => 1,000.342
formatNumber(1000.342, { symbols: { decimal: ',', grouping: '.' } }); // => 1.000,34 (italian format)
```

# API

```js
formatNumber(number, options)
```

where:

- `number` the number to format
- `options`
  - `fractionDigits: number` the number of decimal digits (default `2`)
  - `symbols`
    - `decimal` the decimal symbol
    - `grouping` the grouping symbol

