/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(field) {
  const arr = field.split('.');

  return function (product) {
    return arr.reduce((acum, item) => {
      if (!acum) {
        return;
      } else if (acum[item]) {
        acum = acum[item];
        return acum;
      } else {
        return acum[item];
      }
    }, {...product});
  }
}
