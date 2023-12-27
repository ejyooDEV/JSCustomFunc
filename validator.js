/**
* 설계자료 
* Miro : https://miro.com/app/board/uXjVN-oGjfM=/
*/

afterrender: function () {
  var me = this;
  var vm = me.getViewModel();
  var model = vm.get('model');
  var config = {
    model: model
  };
  me.processCheck(config);
},

//#region config
/**
 * model : 체크 대상 모델
 * checkKeys : 체크 키
 * customValues : 커스텀 Object 담는 곳 (예외처리용)
 */
//#endregion

// 프로세스 요청하는 함수
processCheck: function (config) {
    var me = this;
    var modelType = config['model']['Type'];

    switch (modelType) {
        case "AType":
            config['checkKeys'] = ['lock'];
            me.processResolver(config);
            break;
        case "BType":
            break;
        case "CType":
            break;
        default:
            break;
    }
},

// 프로세스 작업 요청하는 중간자 함수
processResolver: function (config) {
    var me = this;
    var checkKeys = config['checkKeys'];
    var processFunctions = [];

    for(var i = 0; i < checkKeys.length; i++) {
        switch (checkKeys[i]) {
            case "lock":
                processFunctions.push(me.lockCheck);
                break;
            case "relation":
                break;
            case "upDown":
                break;
            case "fields":
                break;
        }
    }

    Promise.all(processFunctions.map(f => f(config))).then((values) => {
        for(var i = 0; i < values.length; i++) {
            if (values[i]) {
                Ext.Msg.alert('Alert', values[i]);
                break;
            }
        }
    });
},

// Lock 체크 함수
lockCheck: function (config) {
    return new Promise((resolve, reject) => {
        var model = config['model'];
        var isLocked = model['Locked'];
        if (isLocked) {
            switch (model['Type']) {
                case "AType":
                    resolve("The item is Lock.");
                    break;
                default:
                    resolve("A problem occurred while performing the item. Please contact your administrator.");
                    break;
            }
        }
        resolve("A problem occurred while performing the item. Please contact your administrator.");
    });
}
