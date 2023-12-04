/**
 * 중복 데이터에서 uniquedata만 추출하는 함수
 * @param {*} duplicateItems 중복데이터 목록
 * @param {*} customFunc 유일 데이터 추출하기 위한 커스텀 함수
 * @returns 
 */
convertUniqueDatas: function (duplicateItems, customFunc) {
    if (!Array.isArray(duplicateItems)) {
        throw new Error("DuplicateItems must be an array.");
    }

    var uniqueItems = undefined;

    if (typeof customFunc === 'function') {
        uniqueItems = [...new Set([].concat(...duplicateItems.map(item => {
            try {
                return customFunc(item);
            } catch (e) {
                console.error("Error running customFunc.", e);
                return item;
            }
        })))];
    } else {
        uniqueItems = [...new Set([].concat(...duplicateItems.map(item => {
            return item;
        })))];
    }

    return uniqueItems;
}
