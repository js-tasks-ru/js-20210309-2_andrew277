/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const newArr = arr.slice();
    newArr.sort(function (a, b) {
        if (param === 'desc') {
            return b.localeCompare(a, ['ru', 'en'], { caseFirst: 'lower' });
        } else {
            return a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' });
        } 
    });
    
    return newArr;
}
