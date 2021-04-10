$(document).ready(function(){

    // References

    var clickMenu = $(".with-dropdown")
    var dropMenu = $(".drop-menu");

    //FUNCTIONS TOGGLE
    clickMenu.click(function(){
        dropMenu.not($(this).find(".drop-menu")).hide();
        $(this).find(".drop-menu").toggle();
    })

    //FUNCTIONS CLICK OUT
    $("main").not($("header")).click(function(){
        dropMenu.hide();
    })
});
