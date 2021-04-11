/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The obj should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  domains.map((elem) => {
    elem.split('.').reverse().reduce((acc, item) => {
      const str = `${acc}.${item}`;
      obj[str] = obj[str] ? obj[str] += 1 : 1;

      return str;
    }, '');

    return elem;
  });

  return obj;
}

module.exports = getDNSStats;
