/**
 * array 객체에서 trackerTypeId를 기준으로 중복을 제거하는 함수
 * @param {*} array 
 * @returns 
 */
removeDuplicatesByArray(array, key) {
    var uniqueObjects = [];
    var uniqueIds = new Set();

    for (var item of array) {
        if (!uniqueIds.has(item[key])) {
            uniqueIds.add(item[key]);
            uniqueObjects.push(item);
        }
    }

    return uniqueObjects;
},
