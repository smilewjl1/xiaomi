window.addEventListener('load',function(){
    var xiaomi = new XiaoMi();
    xiaomi.silde();
});

var XiaoMi = function (){

};

XiaoMi.prototype = {
    silde:function(){
        //初始化轮播图
        var mySwiper = new Swiper('.swiper-container', {
           //自动轮播图的参数
           autoplay: {
               //自动轮播图的间隔时间
               delay: 1000,
               //在手指滑动后是否要再次开启自动轮播图
               disableOnInteraction: false,
           },
           //无缝轮播图参数
           loop: true,
           //初始化小圆点 注意页面需要有这个容器
           pagination: {
               el: '.swiper-pagination',
           },           
       });
   }
};
