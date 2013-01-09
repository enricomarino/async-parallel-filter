
/* !
 * parallel-filter
 * async parallel filter
 *
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/*
 * Expose `parallel_filter`
 */

module.exports = parallel_filter;

/*
 * parallel-filter
 * Filter each item of 'array' by 'iterator' in parallel
 * and call 'callback' when done
 *
 * @param {Array} array array
 * @param {Function} iterator iterator
 * @param {Function} callback callback
 * @api public
 */

function parallel_filter(array, iterator, callback) {
  var results = [];
  var completed = 0;
  var len = array.length;
  var i;

  function complete(err, result) {
    if (err) {
      callback(err);
      callback = function () {};
      return;
    }
    results[index] = result ? [value] : [];
    completed += 1;
    if (completed === len) {
      callback(concat.apply([], results));
      return;
    }
  }

  function iterate(index, value) {
    iterator(value, complete);
  }

  for (i = 0; i < len; i += 1) {
    iterate(i, array[i]);
  }
};