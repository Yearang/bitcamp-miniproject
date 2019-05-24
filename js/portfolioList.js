$(document).ready(function() {
    $('img').on('mouseover', function() {
        $(this).animate({
            opacity: '0.8'
        }, 300, function() {
            $(this).animate({
                opacity: '1'
            });
        });
    });
});
