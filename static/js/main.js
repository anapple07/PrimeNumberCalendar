$(window).load(function() {
    $('#calendar').fullCalendar();

    $('#my-next-button').click(function() {
        $('#calendar').fullCalendar('next');
    });

    $('#my-prev-button').click(function() {
        $('#calendar').fullCalendar('prev');
    });

    $("td .fc-day").each(function(i) {
        var date = $(this).data("date");
        var prime_flg = Calc(date)
        if ( prime_flg == true ) {
            $(this).addClass("prime")
        }
    });
});

function Calc(date) {
    var num = date.replace( /-/g , "" );

    if(num === 2) {
        return false;
    } else {
        for(i = 2; i < num; i++) {
            if(Math.sqrt(i) > num ) {
                return false;
                break;
            }else if( num % i === 0 ) {
                return false
            }
        }
        return true;
    }
}
