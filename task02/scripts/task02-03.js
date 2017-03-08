    /**
     * getData方法
     * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
     * 返回一个数组，格式见函数中示例
     */

    function getData() {
        /*
         coding here
         */

        /*
         data = [
         ["北京", 90],
         ["北京", 90]
         ……
         ]
         */
        var data = [];
        var oUl = document.getElementById("source");
        var oLi = oUl.getElementsByTagName("li");
        for(var i = 0; i < oLi.length; i++) {
            var city = oLi[i].innerText.slice(0,2);
            var num = parseInt(oLi[i].firstElementChild.innerHTML);
            if(typeof num == "number"){
                data.push([city, num]);
            }
        }

        return data;
    }

    /**
     * sortAqiData
     * 按空气质量对data进行从小到大的排序
     * 返回一个排序后的数组
     */
    function sortAqiData(data) {
        data.sort(function(a,b){
            return a[1]-b[1];
        });
        return data;
    }

    /**
     * render
     * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
     * 格式见ul中的注释的部分
     */
    function render(data) {
        var resort = document.getElementById("resort");
        var ranking = ["一","二","三","四","五","六","七"];
        var content = "";
        data.forEach(function(item, index){
            content += ("<li>第"+ranking[index]+"名："+item[0]+"空气质量："+"<b>"+item[1]+"</b></li>");
        });
        resort.innerHTML = content;
    }

    function btnHandle() {
        var aqiData = getData();
        aqiData = sortAqiData(aqiData);
        render(aqiData);
    }

    function init() {

        // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
        var btn = document.getElementById("sort-btn");
        btn.onclick = btnHandle;

    }

    init();