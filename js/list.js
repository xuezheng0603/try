/**
 * @author Administrator
 */
//mui初始化
mui.init();
//初始化滚动块
var mask = mui.createMask(function() {

})
//滚动块
mui('.menu-left-scroll').scroll({
	deceleration: 0.0005,
	indicators: false,
});
mui('.scroll-shopping').scroll({
	deceleration: 0.0005,
	indicators: true,
});
mui('.menu-right-scroll').scroll({
	deceleration: 0.0005,
	indicators: true,
});
//显示购物车
$(".footer-shopping").click(function() {
	mask.show();
	$(".footer-shopping-page").show();
})
//清空购物车
$(".shopping-clear-icon").click(function() {
	$(".shopping-list").empty();
	$(".footer-shopping-page").hide();
	$(".footer-price small").text(0);
})
//		$(".footer-shopping-page .footer-shopping").click(function(){
//			$(".footer-shopping-page").toggle();
//		})
//点餐评价切换
$(".bar-nav span").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
})
//左边tab切换
$(".menu-left a li").click(function() {
	$(this).addClass("active").parent().siblings().children().removeClass("active");
})
$(".menu-right-price span:nth-child(3)").hide();
$(".menu-right-price span:nth-child(4)").hide();
$(".menu-right-price span:nth-child(5)").hide();
$(".footer-shopping-page").hide();
//点加++
$(".menu-right-price span:nth-child(2)").click(function() {
	var price = 11;
	var total;
	var numBer = $(this).next().text() * 1;
	var footerPrice = $(".footer-price small").text() * 1;
	$(this).next().text(numBer + 1);
	total = price * (numBer + 1);
	footerPrice = footerPrice + price;
	$(this).nextAll().find("small").text(total);
	$(".footer-price small").text(footerPrice);
	$(this).siblings().show();
});
//点--
$(".menu-right-price span:nth-child(4)").click(function() {
	var price = 11;
	var total;
	var numBer = $(this).prev().text() * 1;
	var footerPrice = $(".footer-price small").text() * 1;
	if(numBer > 1) {
		$(this).prev().text(numBer - 1);
		total = price * (numBer - 1);
		footerPrice = footerPrice - price;
		$(".footer-price small").text(footerPrice);
		$(this).nextAll().find("small").text(total);
	} else if(numBer === 1) {
		$(this).hide();
		$(this).next().hide();
		$(this).nextAll().find("small").text(0);
		footerPrice = footerPrice - price;
		$(".footer-price small").text(footerPrice);
		$(this).prev().text(0);
		$(this).prev().hide();
		if(footerPrice===0){
			$(".footer-shopping-page").hide();
		}
	}
});