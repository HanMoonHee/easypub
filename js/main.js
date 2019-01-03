$(function(){
  /*터치 슬라이드 비쥬얼 영역*/
  window.mySwipe = $("#mySwipe").Swipe({
    auto: 3000,
    continuous: true,
    callback: function(index, element){ //index에 이동된 배너의 index 값이 저장됩니다. element에는 이동된 배너 요소가 저장됩니다.
      
      /* 클래스 active를 포함하는 불릿 버튼을 비활성화 버튼으로 만들고 active 클래스를 삭제합니다. */
      $(".touch_bullet .active").attr("src", $(".touch_bullet .active").attr("src").replace("on.png", "off.png"))
      .removeClass("active");

      /* 인덱스(index)에 해당하는 불릿 버튼을 활성화된 버튼으로 만들고 acive클래스를 생성합니다.*/
      $(".touch_bullet img").eq(index).attr("src", $(".touch_bullet img").eq(index).attr("src").replace("off.png", "on.png"))
      .addClass("active");
    }
  }).data("Swipe");
  
  /*비쥬얼 이전, 다음 버튼*/
  $(".touch_left_btn a").on("click", function(){
    mySwipe.prev(); //이전 배너로 이동합니다.
    return false; //링크를 차단합니다.
  });
  
  $(".touch_right_btn a").on("click", function(){
    mySwipe.next();
    return false;
  });

  /* 불릿버튼 클릭 */
  // 불릿버튼을 클릭할떄 함수 실행
  $(".touch_bullet li").on("click", function(){

    // 불릿 index와 슬라이드 이미지가 서로 연동이 되어있는가?

    // 클릭한 불릿버튼의 li요소에 인덱스 값을 구해온다
    var bltNum=$(".touch_bullet li").index(this);

    // 불릿을 누른 index대로 해당 롤링이미지를 노출시킨다.
    


  });
  
  // 동시에 노출된 이미지 index 불릿은 active클래스를 생성해준다.


  /*롤링 버튼 배너*/
  //첫 번째 배너를 제외하고 숨깁니다.
  $("#roll_banner_wrap dd").not(":first").hide();

  //첫 번째 버튼의 <a>를 저장합니다.
  var onBtn=$("#roll_banner_wrap dt a:first");

  // 1~4번 버튼을 클릭할때마다 이벤트 핸들러의 실행문을 실행합니다.
  $("#roll_banner_wrap dt a").on("click", function(){
    // 노출되어 있는 배너를 숨깁니다.
    $("#roll_banner_wrap dd:visible").hide();

    //onBtn에 하위 요소 <img>에 "src" 속성을 비활성 버튼이미지 경로로 바꿉니다.
    $("img", onBtn).attr("src", $("img", onBtn).attr("src").replace("over.gif", "out.gif"));

    //1~4번 버튼 <a> 태그 중 클릭한 버튼의 <a> 요소에 인덱스 값(0,1,2,3)을 구해옵니다.
    var num=$("#roll_banner_wrap dt a").index(this);

    //클릭한 버튼의 인덱스 값과 일치하는 <dd> 요소만 나타냅니다.
    $("#roll_banner_wrap dd").eq(num).show();

    //클릭한 <a>요소의 하위 <img>에 "src" 속성을 활성화된 버튼 이미지 경로로 바꿉니다.
    $("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif"));

    //클릭 이벤트가 발생한 버튼에 <a> 태그가 변수 onBtn에 할당됩니다.
    onBtn=$(this);

    return false;
  });

  //재생 버튼을 클릭했을 때
  $(".playBtn").on("click", function(){
    clearTimeout(auto1);
    auto1=setTimeout(autoPlay, 1000); //1초뒤에 autoPlay 함수를 실행시킵니다.

    //재생 버튼에 "src"속성을 활성화된 버튼 이미지로 바꿉니다.
    $("img", this).attr("src", $("img", this).attr("src").replace("off.gif","on.gif"));

    //스톱 버튼에 "src" 속성을 비활성화된 버튼 이미지로 바꿉니다.
    $(".stopBtn img").attr("src", $(".stopBtn img").attr("src").replace("on.gif", "off.gif"));

    return false;
  });
  
  //스톱 버튼을 클릭했을때
  $(".stopBtn").on("click", function(){
    clearTimeout(auto1);

    //스톱 버튼에 "src" 속성을 활성화된 버튼 이미지로 바꿉니다.
    $("img", this).attr("src", $("img", this).attr("src").replace("off.gif", "on.gif"));

    //재생 버튼에 "src" 속성을 비활성화된 버튼 이미지로 바꿉니다.
    $(".playBtn img").attr("src", $(".playBtn img").attr("src").replace("on.gif", "off.gif"));

    return false;
  });

  var btnNum=0;
  function autoPlay(){
    btnNum++;
    if(btnNum>=4) btnNum=0;

    //1~4번 버튼이 btnNum 값에 따라 순서대로 선택되고 강제로 클릭됩니다.
    $("#roll_banner_wrap dt a").eq(btnNum).trigger("click");

    //4초 간격으로 재귀 함수 호출이 발생합니다. 그러므로 autoPlay()함수에 실행문이 반복 실행됩니다.
    auto1=setTimeout(autoPlay, 4000);
  }
  //최초 로딩 시 3초 이후에 function autoPlay(){...}를 실행합니다.
  var auto1=setTimeout(autoPlay, 3000);

  /*탭메뉴*/
  //초기에 활성화된 첫 번째 탭 버튼 <a>만 변수 onTab에 할당하였습니다.
  var onTab=$("#tabmenu dt a:first");

  //탭 버튼에 마우스오버, 포커스 이동, 클릭했을때 이벤트 핸들러가 실행됩니다.
  $("#tabmenu dt a").on("mouseover focus click", function(){
    //현재 보이는 게시물 목록을 숨깁니다.
    $("#tabmenu dd:visible").hide();

    //onTab에 할당된 요소의 하위<img>에 "src" 속성을 비활성화 버튼 이미지로 바꿉니다.
    $("img", onTab).attr("src",$("img",onTab).attr("src").replace("over.gif","out.gif"));

    //클릭한 <a>의 부모요소인 <dt>의 다음 요소만 노출시킵니다.
    $(this).parent().next().show();

    //클릭한 <a>의 하위 버튼 이미지를 활성화된 이미지로 바꿉니다.
    $("img",this).attr("src",$("img",this).attr("src").replace("out.gif", "over.gif"));

    onTab=$(this); //클릭한요소에 <a>가 onTab에 할당됩니다.
    return false; //링크를 차단하였습니다.
  });

  /* 베스트북 슬라이더 */
  var mySlider=$("#best_bg ul").bxSlider({
    mode:"horizontal", //수평방향으로 이동합니다.
    speed:500,
    pager:false,
    moveSlides:1,
    slideWidth:125,
    minSlides:5,
    maxSlides:5,
    slideMargin:30,
    auto:true,
    autoHover:true,
    controls:false
  });

  $(".prev_btn").on("click",function(){
    mySlider.goToPrevSlide();
    return false;
  });

  $(".next_btn").on("click", function(){
    mySlider.goToNextSlide();
    return false;
  });

   /*팝업 연동*/
  

});