$(document).ready(function(){
    $("h1").css("color", "red");
})

$("h1").text("Hello, World!");

$("button").html("<em>You clicked me!</em>");

console.log($("img").attr("src"));


$("a").attr("href", "https://www.example.com");

$("h1").click(function(){
    $(this).css("color", "blue");
});
