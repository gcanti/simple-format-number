var insertGroupingRegexp = /(\d+)(\d{3})/;

function insertGrouping(s, grouping) {
  var times = Math.floor(s.length / 3);
  for (var i = 0; i < times; i++) {
    s = s.replace(insertGroupingRegexp, '$1' + grouping + '$2');
  }
  return s;
}

function formatNumber(n, options) {
  // Set default options
  options = options || {};
  options.fractionDigits = typeof options.fractionDigits !== 'undefined' ? options.fractionDigits : 2;
  options.useGrouping = typeof options.useGrouping !== 'undefined' ? options.useGrouping : true;
  options.symbols = typeof options.symbols !== 'undefined' ? options.symbols : {
    // US formats
    grouping: ',',
    decimal: '.'
  };

  var parts = n.toFixed(options.fractionDigits).split('.');
  var integerPart = parts[0];
  var decimalPart = parts[1];
  if (options.useGrouping) {
    integerPart = insertGrouping(integerPart, options.symbols.grouping);
  }
  return integerPart + (options.fractionDigits > 0 ? options.symbols.decimal + decimalPart : '');
}

module.exports = formatNumber;
