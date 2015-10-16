function shallowCopy(a, b) {
  if (b) {
    for (var k in b) {
      if (b.hasOwnProperty(k)) {
        a[k] = b[k];
      }
    }
  }
  return a;
}

function getOptions(options) {
  var defaults = {
    fractionDigits: 2,
    useGrouping: true // turn off when you want to display a number in a textbox
  };
  var symbols = { // US formats as default
    grouping: ',',
    decimal: '.'
  };
  options = shallowCopy(defaults, options);
  options.symbols = shallowCopy(symbols, options.symbols);
  return options;
}

var insertGroupingRegexp = /(\d+)(\d{3})/;

function insertGrouping(s, grouping) {
  var times = Math.floor(s.length / 3);
  for (var i = 0; i < times; i++) {
    s = s.replace(insertGroupingRegexp, '$1' + grouping + '$2');
  }
  return s;
}

function formatNumber(n, options) {
  options = getOptions(options);
  var parts = n.toFixed(options.fractionDigits).split('.');
  var integerPart = parts[0];
  var decimalPart = parts[1];
  if (options.useGrouping) {
    integerPart = insertGrouping(integerPart, options.symbols.grouping);
  }
  return integerPart + (options.fractionDigits > 0 ? options.symbols.decimal + decimalPart : '');
}

module.exports = formatNumber;