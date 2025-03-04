var losstime=0;

function getNetworkInterface(ReturnFun) {
    $.ajax({
        type: "GET",
        url: "/sys/network/getNetworkInterface",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: {},
        dataType: 'json',
        success: ReturnFun,
        error: function (e) {
            console.log(e);
        }
    });
}

function startCatchPacket(json, ReturnFun) {
    $.ajax({
        type: "POST",
        url: "/sys/network/startCatch",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: json,
        dataType: 'json',
        success: ReturnFun,
        error: function (e) {
            console.log(e);
        }
    });
}

function reFresh(ReturnFun) {
    $.ajax({
        type: "POST",
        url: "/sys/network/getPacketPS",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: {},
        dataType: 'json',
        success: ReturnFun,
        error: function (e) {
            losstime++;
            if(losstime==3){
                toastr.warning('连接错误，请刷新页面');
            }
            if(losstime>=10){
                window.location.reload();
            }
        }
    });
}

function stopCatchPacket(json, ReturnFun) {
    $.ajax({
        type: "POST",
        url: "/sys/network/stopCatch",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: json,
        dataType: 'json',
        success: ReturnFun,
        error: function (e) {
            console.log(e);
        }
    });
}

function getWarningList(offset,ReturnFun) {
    $.ajax({
        type: "POST",
        url: "/sys/network/getWarn",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        data: {offset:offset},
        dataType: 'json',
        success: ReturnFun,
        error: function (e) {
            console.log(e);
        }
    });
}