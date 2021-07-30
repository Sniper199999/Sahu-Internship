
$(document).ready(function() {
        $("li[id^='carousel-tm']").on("click", function() { 
            $(this).addClass("active").siblings().removeClass("active");
        });
});

$(document).ready(function() {
    $('#toTopBtn').click(function() {
    $("html, body").animate({
    scrollTop: 0
    }, 1700);
    return false;
    });
});

    