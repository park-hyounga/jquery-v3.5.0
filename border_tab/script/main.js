$(function(){        
    tabs();  // tabs 기능 호출(=실행)
    popup(); // popup 기능 호출
});
function tabs(){ // tabs 기능 정의
    notice_on();
    gallery_on(); 
}
function notice_on(){
    $(".board_title li").click(function(){
        if($(this).hasClass("on")) {

        } else {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");
            $("#gallery").toggleClass("hide");
        }
    });
}
function popup(){ // popup 기능 정의   
    popup_open();
    popup_close();
}
function popup_open(){
    $("#notice li:eq(0)").click(function(){ // 팝업창 열기 기능
        $("#popup").css("display","block");
    });
}
function popup_close(){
    $("#popup input[type=button]").click(function(){
        $(this).parent().css("display","none");
        // 부모를 감추면 - 자식인 나도? 없어지겠죠~
    })
}