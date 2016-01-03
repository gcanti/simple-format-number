var assign = require('lodash/object/assign');
var defaults = {
  fractionDigits: 2,
  useGrouping: true,
  symbols: { // US formats
    grouping: ',',
    decimal: '.'
  }
};
var insertGroupingRegexp = /(\d+)(\d{3})/;

function insertGrouping(s, grouping) {
  var times = Math.floor(s.length / 3);
  for (var i = 0; i < times; i++) {
    s = s.replace(insertGroupingRegexp, '$1' + grouping + '$2');
  }
  return s;
}

function formatNumber(n, options) {
  options = assign({}, defaults, options);
  var parts = n.toFixed(options.fractionDigits).split('.');
  var integerPart = parts[0];
  var decimalPart = parts[1];
  if (options.useGrouping) {
    integerPart = insertGrouping(integerPart, options.symbols.grouping);
  }
  return integerPart + (options.fractionDigits > 0 ? options.symbols.decimal + decimalPart : '');
}

module.exports = formatNumber;