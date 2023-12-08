/**
 * json 데이터 중 특정 Key를 기준으로 유일 데이터를 추출하는 함수
 * @param {*} duplicateItems json으로 된 중복 데이터
 * @param {*} key 기준 Key
 * @returns 
 */
convertUniqueDatasToJson: function (duplicateItems, key) {
    var uniqueItemsMap = new Map();

    duplicateItems.forEach(item => {
        try {
            uniqueItemsMap.set(item[key], item);
        } catch (e) {
            console.error("Error running customFunc.", e);
        }
    });
    var uniqueItems = Array.from(uniqueItemsMap.values());

    return uniqueItems;
}
