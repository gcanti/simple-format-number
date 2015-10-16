var tape = require('tape');
var formatNumber = require('../.');

tape('formatNumber(n, options)', function (t) {

  t.test('should default to US format', function (assert) {
    assert.plan(6);
    assert.strictEqual(formatNumber(0), '0.00');
    assert.strictEqual(formatNumber(-0), '0.00');
    assert.strictEqual(formatNumber(0.12), '0.12');
    assert.strictEqual(formatNumber(1000), '1,000.00');
    assert.strictEqual(formatNumber(1000.342), '1,000.34');
    assert.strictEqual(formatNumber(-1000.342), '-1,000.34');
  });

  t.test('should handle options.fractionDigits', function (assert) {
    assert.plan(2);
    assert.strictEqual(formatNumber(1000.342, { fractionDigits: 3 }), '1,000.342');
    assert.strictEqual(formatNumber(-1000.342, { fractionDigits: 3 }), '-1,000.342');
  });

  t.test('should handle options.symbols', function (assert) {
    assert.plan(2);
    assert.strictEqual(formatNumber(1000.342, { symbols: { decimal: ',', grouping: '.' } }), '1.000,34');
    assert.strictEqual(formatNumber(-1000.342, { symbols: { decimal: ',', grouping: '.' } }), '-1.000,34');
  });

});

