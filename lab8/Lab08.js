
/*请在该区域内声明或者获取所要使用的全局变量*/
/********************************************begin************************************/

/*Global Variable Area */
const arrowRight = document.getElementById("arrow_right");
const arrowLeft = document.getElementById("arrow_left");
const wrap = document.getElementById("wrap");
const pictures =wrap.children;
const buttons = document.getElementById("buttons").children;
const container = document.getElementById("container");
const imgWidth = container.offsetWidth;
const trs = document.getElementsByTagName("tr");
var txtDom = document.getElementById("txtId");
var a = 0;
/*********************************************end*************************************/



/* 任务一
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击左箭头prev和右箭头next的时候，可以切换到前一张图片和下一张图片。（左右箭头为html中的a标签）
 * ②每切换一张图片，右下角的数字标记对应变化。
 *      如：一开始，第1张图片显示出来，右下角的1-5的数值中，数值1位红色，2-4为绿色，表示当前显示第1张图片。
 *      点击next箭头，图片切换到第2张，同时，右下角红色数值从1切换为2，数值1,3,4,5为绿色。
 * ③当当前图片为第1张时，点击prev箭头，切换到第5张图片，且数值5置为红色。
 * 当当前图片为第5张时，点击next箭头，切换到第1张图片，且数值1置为红色。
 * ④切换图片的过程不要求，可直接切换，也可动画切换，但要求保证一定的切换动画合理性，不能出去明显的衔接不当。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/
arrowRight.onclick = nextPicture;
function nextPicture(){
    if(a<buttons.length-1) {
        buttons[a].className = "";
        a++;
        buttons[a].className = "on";
        wrap.style.left = wrap.offsetLeft - imgWidth + "px";
    }
    else {
        wrap.style.left = wrap.offsetLeft+imgWidth*a+"px";
        a=0;
        buttons[buttons.length-1].className="";
        buttons[a].className = "on";
    }
}
arrowLeft.onclick = lastPicture;
function lastPicture() {
    if(a>0){
        buttons[a].className = "";
        buttons[a-1].className = "on";
        a--;
        wrap.style.left = wrap.offsetLeft+imgWidth+"px";
    }
    else {
        wrap.style.left = wrap.offsetLeft-imgWidth*(buttons.length-1)+"px";
        a=buttons.length-1;
        buttons[0].className="";
        buttons[a].className = "on";
    }
}
/*********************************************end*************************************/



/* 任务二
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①轮播可以自动播放，切换图片间隔为2s，每一次切换的效果与点击next箭头的效果一致。
 * ②当鼠标移入轮播区域内时，停止自动播放。
 * ③当鼠标不在轮播区域内时，开始自动播放。
 * ④页面刚加载完成时，如果鼠标不在轮播区域内，自动开始自动播放；否则，等待直到鼠标移出轮播区域，再进行自动播放。
 * ⑤本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
let time1 = setInterval(nextPicture,2000);
container.onmouseover = function () {
    clearInterval(time1);
};
container.onmouseout = function () {
    clearInterval(time1);
   time1 = setInterval(nextPicture,2000);
};
/*********************************************end*************************************/



/* 任务三
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击右下角的任意一个数值，能够切换到对应图片，且相应数值变为红色。
 * ②进行①操作过后，是否自动播放，其规则与上一个任务一致。
 * ③本部分只能使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/
for(let n in buttons) {
    buttons[n].onclick = function () {
        for (let i in buttons) {
            buttons[i].className = "";
        }
        buttons[n].className = "on";
        a = n;
        wrap.style.left = -imgWidth*a-imgWidth +"px";
    };
}
/*********************************************end*************************************/


/*任务四
 * 请参考css中的style参数、html中的内容、下方的效果要求，然后在下面区域内编写代码。
 * 效果要求：
 * ①点击某一非表头的单元格，可以编辑其内容，编辑完毕后点击其他部位，可以在界面上显示修改后的内容。
 * ②点击单元格后，光标自动定位于单元格的首个字符或者汉字前。
 * ③本部分可以使用jQuery，也可以使用原生JS。
 */
/********************************************begin************************************/

/*Code Here*/

$("td").on("click",function(event){
    var $td = $(this);
    var $input = $td.find("input");
    var val = $td.text();
    $td.html("<input type='text' value='"+val+"'/>");
    $td.find("input").focus();
    $td.find("input").blur(function () {
        var $input = $(this);
        var $td = $input.parent("td:first");
        $td.text($input.val());
    });
    setCarePosition("input",0);
});

function setPosition(ctrl,position) {
    ctrl.focus();
    ctrl.setSelectionRange(position,position);
}

/*********************************************end*************************************/