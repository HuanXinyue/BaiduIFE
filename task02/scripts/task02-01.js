
    (function () {
        /*
         在注释下方写下代码
         给按钮button绑定一个点击事件
         在事件处理函数中
         获取aqi-input输入的值，并显示在aqi-display中
         */
        function $(id) {
            return document.getElementById(id);
        }
        function handle() {
            var input = parseInt($("aqi-input").value);
            var display = $("aqi-display");
            if(input >= 0 && input < 1000) {
                $("aqi-display").innerHTML = $("aqi-input").value;
            }else {
                alert("输入有误，请重新输入");
            }
        }
        $("button").onclick = function () {
            handle();
        };
        $("aqi-input").onkeyup = function (event) {
            if(event.which === 13){
                handle();
            }
        }
    })();