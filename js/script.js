$(function(){/* 팝업창 띄우기 */
  window.open("popup.html","popup","width=490, height=515, left=50% , top=50%")
})
 
/* 헤더영역 */
$(function(){ 
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


/* section01 메인 비주얼 스크롤 버튼 영역 */
$(function(){ 
    var visual = $('#brandVisual>ul>li');//슬라이드이미지
    var button = $('#buttonList>li'); //동그라미 버튼
    var leftBtn = $('.btnImg .prev'); // 왼쪽 버튼
    var rightBtn = $('.btnImg .next'); // 오른쪽 버튼
    var current = 0;  // 현재 보여지는 이미지는 0
    var setIntervalId; //clearInterval을 쓰기위한 변수

  timer(); // 함수 호출

  function timer(){//동작시키기 위한 메서드
    setIntervalId = setInterval(function(){//동작시키기 위한 메서드
      var prev = visual.eq(current);
      var pn = button.eq(current);
      move(prev, 0, '-100%');  //오른쪽에서 왼쪽으로 이동
      pn.removeClass('on');

      current++;

      if(current == visual.size()) {current=0}
       /* 이미지는 왼쪽으로 이동하고 동그라미 버튼은 취소해 */

      var next = visual.eq(current); 
      var pnn = button.eq(current);
      move(next, '100%', 0);
      pnn.addClass('on');

    },3000); //3초동안 머물러있다가 동작해
  };

  function move(tg, start, end){  //함수 지정
    tg.css('left', start).stop().animate({left:end}, {duration:500, ease:'easeOutCubic'})
  }

  /* 동그라미 버튼 클릭하면 버튼 컬러 변경================== */
  button.on({click: function(){
    var tg = $(this);
    var i = tg.index(); //선택한 버튼의 인덱스 번호 i (연동)

    
    //버튼이 활성화 되어있으면.. 검은색
    button.removeClass('on'); //현재 활성화된 ('on')해제시켜
    tg.addClass('on');

     //버튼을 클릭했을 때 해당 인덱스 배너 호출
     move1(i);
  } 
});

  /* 버튼 클릭했을 때 해당 배너 보여지도록 ================*/
  function move1(i){
    if(current == i) return //if(조건문)   ==(같다면..) 
  
    var currentEl = visual.eq(current); //currentEl : 현재 엘리먼트 | eq :순서를 찾을 때 사용
    var nextEl = visual.eq(i)
  
    currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500);
    nextEl.css({left: '100%'}).stop().animate({left: 0}, 500);
  
    current = i;//current를 i에 담아 작업
  }


  /* 화살표 클릭 이벤트 =================== */
  // 오른쪽 화살표
  rightBtn.click(function(){
    var prev = visual.eq(current);
    var pn = button.eq(current);

        move(prev, 0,'-100%');
        pn.removeClass('on');

        current++;

        if(current == visual.size()) {current = 0}

    var next = visual.eq(current)
    var pnn = button.eq(current)

        move(next, '100%',0);
        pnn.addClass('on');        

        return;

  });

  // 왼쪽 화살표
  leftBtn.click(function(){
    var prev = visual.eq(current);
    var pn = button.eq(current);

        move(prev, 0,'100%');
        pn.removeClass('on');  //on  되어있는 거 해제해

        current--;

        if(current == -visual.size()) {current = 0} 

    var next = visual.eq(current)
    var pnn = button.eq(current)

        move(next, '-100%',0);
        pnn.addClass('on');        

        return;
      });
});


$(function(){ /* section02 여러 아이콘들 영역 */
  $('#section02 .icons button').each(function() {

    var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
    var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
    var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
    //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 
  
   //호버이벤트
    $(this).hover(function() { 
      $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec(srcName)); //hover시 _on붙이기
    }, function() {
      $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); //hover시 _on 때기
    });
  });
});

$(function(){ /*section03 연구원 소식 영역 */
   var tab = $('.tab > li');
  var content = $('.tab_con > div');

  content.hide().eq(0).show();

  tab.click(function(e){
    e.preventDefault();
    var tg = $(this);
    var i = tg.index();

    tab.removeClass('active');
    tg.addClass('active');
    content.css('display','none');
    content.eq(i).css('display','block');

  });

  //레이어팝업(모달팝업)
  $('#about_news .popup').click(function(){
    $('.pop').css('display','block');
    $('.pop button').css('cursor','pointer');
  });

  $('.pop button').click(function(){
    $('.pop').css('display','none');
  })
});

$(function(){ /*section03 이미지 구동영역 */
  setInterval(function(){
    // var angle = 0; //현재의 각도를 변수로 지정
    $('.illustration1').animate({top:125},800).animate({top:115},800); /* 전구 위,아래 */
    $('.illustration3').animate({top:-222,left:50,rotate:"15deg"},1000).animate({top:-219,left:49,rotate:"1deg"},1000); /* 남자 팔 */

    $('.illustration5').animate({top:-435,left:-125,rotate:"10deg"},500).animate({top:-436,left:-120,rotate:"1deg"},1000); 



    // $('.ball2').delay(1881).animate({top:10,left:430},300);

  })  



});
 
$(function(){ /* section04 이미지 가로스크롤 */
  $('#bar').draggable({
    axis:'x',
    containment:'parent'//부모(scrollBar)를 기준으로 움직여~
  })

  $('#bar').on('drag',function(){
    getPos()
  })
  
  var min = 0; //최소값은 0
  var max = -840; // 최대값은 -840
  function getPos(){ //호출될 함수 명
    var barLeft = $('#bar').css('left');
    barLeft = parseInt(barLeft);
    var pos = (barLeft*(max-min)/570+min);
    $('#scroll_Box').css('left',pos);
  }
});


$(function () {
  /* 날씨 정보를 요청받는 url */
  $.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?lat=37.2992437&lon=126.9782357&appid=86d23ff7b40d9313c5fb54e1ba8ff781&units=Metric",  // get: 무언가 받아올 때 사용함
    function (data) {
      var $city = data.name; /* 도시이름:수원시 */
      var $minTemp = data.main.temp_min; /* 최저온도 */
      var $maxTemp = data.main.temp_max; /* 최고온도 */
      var $cTemp = data.main.temp; /* 현재온도 */
 
      var now = new Date(Date.now()); /* 현재날짜 */
      var b = now.getDay();
      switch (b) {
        case 0:
          c = "일";
          break;

        case 1:
          c = "월";
          break;

        case 2:
          c = "화";
          break;
        case 3:
          c = "수";
          break;

        case 4:
          c = "목";
          break;

        case 5:
          c = "금";
          break;

        case 6:
          c = "토";
          break;
      }

      /* 날씨 아이콘 데이터 : OpenWeatherMap 오픈 API */
      /* 날씨를 불러오는 방법은 지역이름, 지역 id, 위도, 경도와 같은 위치정보등을 이용해 불러옴. */
      /* 앞의 코드 2자리 숫자로 날씨를 구분하고 영어 소문자 'n'과 'd'로 낮과 밤을 구분. */
      /* 폰트어썸 이미지를 활용하여 각 아이콘 코드의 숫자에 따라 폰트어썸에서 제공한 각 날씨의 아이콘을 스크립트를 저장한 객체로 생성을 하고 아이콘의 앞 두자리 숫자만 필요하므로 .substr(0,2)을 이용하여 변수 $icon에 저장. */

      let weatherIcon = {
        '01': 'wi wi-day-sunny',
        '02': 'wi wi-day-cloudy',
        '03': 'wi wi-cloud',
        '04': 'wi wi-cloudy',
        '09': 'wi wi-day-rain-mix',
        '10': 'wi wi-showers',
        '11': 'wi wi-thunderstorm',
        '13': 'wi wi-snowflake-cold',
        '50': 'wi wi-smog',
      };

      var month = now.getMonth() + 1;

      var $cDate = now.getFullYear() + '년 '+ month + '월 ' + now.getDate() + '일 ' + c + '요일 ' + now.getHours() + '시 ' + now.getMinutes() + '분 ';

      var $wIcon = (data.weather[0].icon).substr(0,2);

      $('.clowtemp').append($minTemp + '℃');
      $('.chightemp').append($maxTemp + '℃');
      $('.ctemp').append($cTemp + '℃');
      $('.cicon').append('<i class="'+ weatherIcon[$wIcon] +'"></i>');
      $('.date').prepend($cDate);
      $('.cname').append($city);

    });
});/* footer 날씨정보 */