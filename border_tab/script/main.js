$(function(){        
    tabs();  // tabs 기능 호출(=실행)
    popup(); // popup 기능 호출
});
function tabs(){ // tabs 기능 정의
    $(".board_title li").click(function(){
        if(!$(this).hasClass("on")) {
            $("#gallery").css("display","block");
        } else {
            $("#gallery").css("display","none");
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