//$(window).load(function() {
$(function(){
    $('#calendar').fullCalendar();
    addCss();

    $("button").click(function() {
        addCss();
    });

});

function addCss() {
    $("td .fc-day").each(function(i) {
        var date = $(this).data("date");
        var prime_flg = Calc(date)
        if ( prime_flg == true ) {
            $(this).addClass("prime")
        }
    });

    $("td").removeClass("fc-today");
}

function Calc(date) {
    var num = date.replace( /-/g , "" );

    if(num === 2) {
        return false;
    } else {
        for(i = 2; i < num; i++) {
            if( num % i === 0 ) {
                return false
            }else if(Math.sqrt(i) > num ) {
                return false;
                break;
            }
        }
        return true;
    }
}
