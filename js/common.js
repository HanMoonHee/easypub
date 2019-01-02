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
  $(".print_btn").on("click", function () {
    window.print();
    return false;
  });
   
  /*검색 창 안내 가이드*/
  $("#sch_f #keyword").on("focus", function () {
    console.log("#keyword");
    $(this).css("background-position", "0 -100px");
  }).on("blur", function () {
    if($(this).val()=="") $(this).css("background-position", "0 0")
  });

  /*GNB메뉴*/
  var beforeEl;
  $("#gnb > li > a").on("mouseoverover focus",function(){
    if(beforeEl)beforeEl
    .children("img")
    .attr("src",beforeEl.children("img").attr("src").replace("over.gif", "out.gif"));
    //마우스를 올린 <a>태그의 자식요소인 img를 attribute속성을 이용하여 src값은 over.gif가 out.gif로 치환됩니다. 

    $("#gnb ul:visible").slideUp("fast");
    //서브 메뉴 <ul> 태그 중 펼쳐져 보이는 메뉴가 있으면 숨깁니다.

    $("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif"));
    //mouseover 또는 focus 이벤트가 발생한 <a> 태그에 하위 <img> 태그의 src 속성값 중에 "out.gif"가 over.gif로 치환됩니다.

    $(this).next().stop().slideDown("normal");
    //mouseover 또는 focus 이벤트가 발생한 <a> 태그 다음에 오는 서브 메뉴인 <ul> 태그가 아래로 펼쳐지며 나타납니다.

    beforeEl=$(this); //마우스를 올린 상위 메뉴 <a> 태그가 변수 beforeEl에 저장됩니다.
  });
  $("#gnb").on("mouseleave", function(){
    $("#gnb ul:visible").slideUp("fast");

    if(beforeEl) beforeEl.children("img")
    .attr("src",beforeEl.children("img").attr("src").replace("over.gif", "out.gif"));
    //마우스를 올린 <a>태그의 자식요소인 img를 attribute속성을 이용하여 src값은 over.gif가 out.gif로 치환됩니다. 
  });

  /*전체메뉴*/
  $("#total_btn a").on("click", function() {
    $("#total_menu").slideDown("normal");
    $("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif"));
    return false;
  });

  /*전체 메뉴 닫기 버튼*/
  $("#total_close").on("click", function() {
    $("#total_menu").slideUp("fast");
    $("#total_btn a img").attr("src", $("#total_btn a img").attr("src").replace("over.gif", "out.gif"));
    return false;
  });

  /*날짜 표기*/
  var t = new Date();
  var y = t.getFullYear();
  var m = t.getMonth()+1;
  var d = t.getDate();

  $(".year").text(y);
  $(".month").text(m);
  // document.getElementsByClassName("date").attr("text", y);
  $(".date").text(d);

   /*관련 사이트 이동*/
   $("form[name=rel_f]").on("submit", function(){
     var url=$("select",this).var();

     window.open(url);
     return false;
   });

  /*퀵메뉴*/
  var defaultTop=parseInt($("#quick_menu").css("top")); //document 상단에서 퀵메뉴가 이동한 거릿값을 파싱(가공)하여 정수로 반환후 변수에 넣는다.
  
  $(window).on("scroll", function(){
    var scv=$(window).scrollTop();
    $("#quick_menu").stop().animate({top:scv+defaultTop+"px"}, 1000);
    // 1초 만에 스크롤바가 이동된 만큼 퀵 메뉴가 앵니메이션이 적용되어 이동.
    // css를 이용해 문서 상단에서 벌린 100px만큼 거리가 유지되도록 변수 defaultTop에 할당된 값을 더하였습니다.
  });

});