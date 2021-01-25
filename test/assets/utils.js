//MD5
function makeSign(callTime, userID, suffix) {
    return md5(callTime + userID + suffix)
}
//时间戳
function makeCallTime() {
    return parseInt(Date.parse(new Date()) / 1000);
}
//从Url 取参数 ;
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === variable) {
            return pair[1];
        }
    }
    return false;
}

function getUserID() {
    var userId = getQueryVariable('userId');
    return userId ? userId : '0';
}

function getMsg() {
    var getMsg = getQueryVariable('msg');
    return getMsg ? getMsg : '0';
}

function inArray(arr, item) {
    for (var i in arr) {
        if (item == arr[i]) {
            return true;
        }
    }
    return false;
}
