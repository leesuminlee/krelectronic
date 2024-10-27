$(function(){/* 헤더영역 */ 
$("nav > ul > li").hover(
  function () {
      $(this).find(".sub").stop().slideDown();
  },
  function () {
      $(this).find(".sub").stop().slideUp();
  }
);
});