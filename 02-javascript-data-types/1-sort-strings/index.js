/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let newArr = arr.slice();
    newArr.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if( a == b) return -1;

        return a.localeCompare(b);
    });

    if (param === 'desc') {
        return newArr.reverse();      
    } else {
        return newArr;
    } 
}
