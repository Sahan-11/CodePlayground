var ct
function update(){
   
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csstext").val()
    +"</style></head><body>"+$("#htmltext").val()+"</body></html>")
    document.getElementById("outputtext").contentWindow.eval($("#jstext").val());
    ct=$("#csstext").val();
}
update();
$(".buton").hover(function(){
    $(this).addClass("highlight")
},function(){
    $(this).removeClass("highlight")})

$(".buton").click(function(){
        $(this).toggleClass("active")
        $(this).removeClass("highlight")
        let textid = "#"+$(this).attr("id")+"text"
        $(textid).toggleClass("hide")
        let numactive=4-$(".hide").length;
        $(".text").width($(window).width()/numactive-6)
})
/*setting width and height***/
$(".text").height($(window).height()-$("nav").height()-9)
$(".text").width($(window).width()/2-6)
/************************/

/***********updating output***********/

$("iframe").contents().find("html").html($(htmltext).val());
$("textarea").on('change keyup paste', function() {
    // updates the update every time the textarea is updated
    update();
});