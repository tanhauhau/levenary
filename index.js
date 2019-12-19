"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = levenArray;

var _leven = _interopRequireDefault(require("leven"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function levenArray(str, array) {
  var minLeven = Number.POSITIVE_INFINITY;
  var result = undefined;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var distance = (0, _leven.default)(str, item);

      if (distance < minLeven) {
        minLeven = distance;
        result = item;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}
