$(document).ready(function() {
    $('img').on('mouseover', function() {
        $(this).animate({
            opacity: '0.6'
        }, 300, function() {
            $(this).animate({
                opacity: '1'
            });
        });
    });
});
