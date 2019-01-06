$(function () {
    /*----------------接口--------------*/
    var interface = (function () {
        /*----------------图片轮播--------------*/
        var play_img = () => {
            imgs[j].style.zIndex = i;
            change_img(j);
            if (j == 0) {
                j += 1;
            } else if (j == 1) {
                j += 1;
            } else if (j == 2) {
                j -= 2;
            }
            i--;
            imgs[j].style.zIndex = i;
            if (j == 1) {
                j += 1;
            } else if (j == 2) {
                j -= 2;
            } else if (j == 0) {
                j += 1;
            }
            i--;
            imgs[j].style.zIndex = i;
            if (j == 2) {
                j -= 1;//1
            } else if (j == 0) {
                j += 2;//2
            } else if (j == 1) {
                j -= 1;//0
            }
            if (i == 1) {
                i = 3;
            }
        }
        /*----------------轮播停止,显示按钮--------------*/
        var stop_playimg = () => {
            clearInterval(timer);
        }
        /*----------------轮播开始,隐藏按钮--------------*/
        var start_playimg = () => {
            timer = setInterval(interface.play_img, 3000);
        }
        /*----------------下一张图片--------------*/
        var next_img = () => play_img();
        /*----------------上一张图片--------------*/
        var pret_img = () => {
            if (j == 0) {
                j += 1;
                play_img();
            } else if (j == 1) {
                j += 1;
                play_img();
            } else if (j == 2) {
                j -= 2;
                play_img();
            }
        }
        /*----------------按钮切换图片--------------*/
        function change_img(val) {
            j = parseInt(this.title) || val;
            let dex = parseInt(this.title) || val;
            if (parseInt(this.title) == 0) {
                dex = parseInt(this.title);
                j = parseInt(this.title);
            }
            if (parseInt(this.title) || j == parseInt(this.title)) {
                play_img();
            }
            for (let i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor = "#FFFFFF";
                btns[i].style.border = "2px solid rgb(116, 113, 113)";
                btns[i].style.boxShadow = "none";
            }
            btns[dex].style.backgroundColor = "#EB3436";
            btns[dex].style.boxShadow = "0px 0px 10px rgb(235, 78, 78)";
            btns[dex].style.border = "none";
        }
        return { play_img, stop_playimg, start_playimg, next_img, pret_img, change_img }
    })();
    var imgs = document.getElementsByTagName('img');
    var change_img_btn1 = document.getElementsByClassName('imgs_btn1');
    var change_img_btn2 = document.getElementsByClassName('imgs_btn2');
    var btns = document.getElementsByClassName('btns');
    var i = 3; //z-index 顺序
    var j = 1; //图片播放顺序
    var timer; //计时器
    /*----------------网页打开，开始轮播--------------*/
    timer = setInterval(interface.play_img, 3000);
    /*----------------鼠标悬停，停止轮播--------------*/
    // box.addEventListener('mouseover',interface.stop_playimg,false);
    $('.save_img:eq(0)').bind('mouseover', interface.stop_playimg);
    /*----------------鼠标移出，开始轮播--------------*/
    // box.addEventListener('mouseout',interface.start_playimg,false);
    $('.save_img:eq(0)').bind('mouseout', interface.start_playimg);
    /*----------------下一张-------------------------*/
    $('.imgs_btn2:eq(0)').bind('click', interface.next_img);
    /*----------------上一张-------------------------*/
    $('.imgs_btn1:eq(0)').bind('click', interface.pret_img);
    /*----------------切换图片按钮-------------------*/
    $('.btns:eq(0)').bind('mouseover', interface.change_img);
    $('.btns:eq(1)').bind('mouseover', interface.change_img);
    $('.btns:eq(2)').bind('mouseover', interface.change_img);
})





