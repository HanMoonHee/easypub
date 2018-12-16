$(function(){
  /*로그인 버튼*/
  $(".login_wrap > a").on("click", function () {
    $("#login_f").animate({top:"20px"},500);
    return false;
  });

  $(".login_wrap .login_close_btn, input[alt='로그인버튼']").on("click", function () {
    $("#login_f").animate({top:"-200px"},500);
    return false;
  });

  $("#user_id, #user_pw").on("focus", function(){
    $(this).prev().css("left", "-9999px");
  });

  $("#user_id, #user_pw").on("blur", function () {
    if($(this).val()=="") $(this).prev().css("left", "2px");
  });
  /*zoom 버튼*/
 
  var base = 100;
  var mybody=$("body");
  $("#zoom a").on("click", function () {
    var zNum = $("#zoom a").index(this); //click 이벤트를 등록한 <a> 태그 중 클릭한 <a>의 인덱스 값을 반환합니다.
    if(zNum==0){ //확대
      base+=10;
    }else if(zNum==1){ //100%
      base=100;
    }else{ //축소
      base-=10;
    }
    mybody.css("overflow-x", "auto").css("transform-origin", "0 0").css("transform", "scale('+base/100+')") //<body>에 base의 값만큼 확대/축소됩니다(IE 8 외에서 적용.)
    .css("zoom",base+ "%"); //<body>에 base의 값만큼 확대/축소됩니다(IE 8 이하에서 적용)

    return false; // 클릭한 <a>의 링크를 차단합니다.
  });

  /*프린트 버튼*/
  
   
  /*검색 창 안내 가이드*/
  

  /*GNB메뉴*/
  

  /*전체메뉴*/
  

  /*전체 메뉴 닫기 버튼*/
  

  /*날짜 표기*/
  

   /*관련 사이트 이동*/
   

  /*퀵메뉴*/
  
});