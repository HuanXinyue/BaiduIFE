var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

(function () {

    /*
     在注释下方编写代码
     遍历读取aqiData中各个城市的数据
     将空气质量指数大于60的城市显示到aqi-list的列表中
     */
    var oList = document.getElementById("aqi-list");
    aqiData.sort(function(a,b){
        return b[1]-a[1];
    });
    
    var ranking = ["一","二","三","四", "五"];
    for (var i = 0; i<aqiData.length;i++ ){
        if (aqiData[i][1] > 60) {
            var oLi = document.createElement("li");
            oLi.innerHTML = "第"+ranking[i]+"名："+aqiData[i][0]+"， "+aqiData[i][1];
            oList.appendChild(oLi);
        }
    }
})();