$(function () {

    $('a')
        .mouseenter(function(){
            $('#color').css('opacity', 1)
        })
        .mouseout(function(){
            $('#color').css('opacity', 0)
        })


});
