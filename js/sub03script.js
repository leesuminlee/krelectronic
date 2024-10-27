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


$(function () {/* 퀵메뉴 여러 메뉴 */

  $("#Quckmenu>#Qucktep").hover(
      function () {
          $(this).find("#sub").stop().slideDown(200);
      },
      function () {
          $(this).find("#sub").stop().slideUp(200);
      }
  );



  $("#sub_contents>ul>li>a").hover(
      function () {
          $(this).next("#sub_contents>ul>li>.brand").stop().slideDown(200);
      },
      function () {
          $(this).next("#sub_contents>ul>li>.brand").stop().slideUp(200);
      }
  );

});

$(function(){ /* 퀵메뉴 클릭하면 맨 위로 올라가도록 */
  /* 탑버튼 감추기 */
  $('#top_btn>a').hide();

  /* 스크롤 이벤트에 조건문 넣어주기  */
  //스크롤의 위치가 500보다 크다면 보이게, 500보다 작다면 안 보이게
  $(window).scroll(function(){ //윈도우를 기준으로..
      if($(this).scrollTop() > 500){ //만족한다면
          $('#top_btn>a').fadeIn();
      }else{ // 만족하기 않는다면
          $('#top_btn>a').fadeOut();
      }
  })

  /* 클릭했을 때 페이지가 올라가도록 */
  $('#top_btn>a').click(function(){
      $('html,body').animate({scrollTop:0},400);

      return false; //클릭이벤트를 걸어주면 클릭이벤트를 먼저쓰이게되고 href로 이동하게 함. 즉, 원래의 가지고 있는 기본 속성은 무시된다.

  })
});

$(function () { /* 아코디언 영영 */
  class Accordion {
      constructor(options) {
          // 기본 옵션과 사용자 지정 옵션을 병합
          this.config = Accordion.mergeConfig(options);
          this.accordion = document.querySelector(this.config.selector);
          // 이벤트 핸들러 내부의 this는 currentTartget
          this.accordion.addEventListener('click', this.toogle.bind(this));
      }

      static mergeConfig(options) {
          // 기본 옵션
          const config = {
              selector: '#accordion',
              multi: true
          };

          return { ...config, ...options };
      }

      toogle(event) {
          if (!event.target.classList.contains('menu')) return;
          // click 이벤트를 발생시킨 <div class="menu"> 요소의 부모 요소인 li 요소
          const targetLi = event.target.parentNode;

          // 멀티 오픈을 허용하지 않으면 타깃 이외의 모든 서브메뉴를 클로즈한다.
          if (!this.config.multi) {
              [].filter.call(
                  this.accordion.childNodes,
                  li => li.nodeType === Node.ELEMENT_NODE && li !== targetLi
              ).forEach(li => li.classList.remove('show'));
          }

          // li 요소의 class에 "show"가 있으면 제거하고 없으면 추가한다.
          targetLi.classList.toggle('show');
      }
  }

  window.onload = function () {
      const accordion = new Accordion({ multi: false });
      // const accordion = new Accordion();
  };


})










