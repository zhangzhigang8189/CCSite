/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
function forbidShowCode() {
    window.onload = function () {
        document.onkeydown = function () {
            var e = window.event || arguments[0];
            //屏蔽F12
            if (e.keyCode == 123) {
                // alert("小样你想干嘛？");
                return false;
                //屏蔽Ctrl+Shift+I
            } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
                // alert("还是不给你看!");
                return false;
                //屏蔽Shift+F10
            } else if ((e.shiftKey) && (e.keyCode == 121)) {
                // alert("求我呀，求我也不给你看!");
                return false;
            }
        };
        //屏蔽右键单击
        document.oncontextmenu = function () {
            // alert("小样不给你看!");
            return false;
        }

    }
}
forbidShowCode();