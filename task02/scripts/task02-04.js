/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function $(id) {
    return document.getElementById(id);
}

function addAqiData() {
    var aqiCity = $("aqi-city-input").value.trim();
    var aqiValue = $("aqi-value-input").value.trim();

    var reCity = /^[a-z\u4E00-\u9FA5]+$/i;
    var reValue = /[\d+]$/;

    if (aqiCity == "") {
        alert("请输入城市名称！");
        return;
    } else if (!reCity.test(aqiCity)) {
        alert("请输入正确的城市名称！");
        $("aqi-city-input").value = "";
        $("aqi-city-input").focus();
        return;
    }
    if (aqiValue == "") {
        alert("请输入空气质量！");
        return;
    } else if (!reValue.test(aqiValue)) {
        alert("请输入正确的数字！");
        $("aqi-value-input").value = "";
        $("aqi-value-input").focus();
        return;
    }
    aqiData[aqiCity] = aqiValue;

}

/**
 * 渲染aqi-table表格
 */
// 每一次都重新渲染

function renderAqiList() {
    var table = $("aqi-table");
    var contentStr ;
    table.innerHTML = "";
    for (var aqiCity in aqiData) {
        var tabStr = "<tr><td>" + aqiCity + "</td><td>" + aqiData[aqiCity] + "</td><td><a href='###'>delete</a></td></tr>";
        if (table.innerHTML == ""){
            contentStr = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>" + tabStr;
        }else {
            contentStr = tabStr;
        }
        $("aqi-table").innerHTML += contentStr;
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(aqiCity) {
    // do sth.
    delete aqiData[aqiCity];
    renderAqiList();


}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    //$("add-btn").onclick = addBtnHandle;
    if($("add-btn").addEventListener) {
        $("add-btn").addEventListener("click", addBtnHandle, false);
    }else {
        $("add-btn").attachEvent("onclick", addBtnHandle);
    }
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    $("aqi-table").addEventListener("click", function(e) {
        if (e.target && e.target.nodeName === "A") {
            delBtnHandle(e.target.parentNode.parentNode.children[0].innerHTML);
            e.preventDefault();
        }
    })
}

init();
