$(document).ready(function () {
    var width = 1;
    var id = setInterval(frame1, 20);

    function frame1() {
        if (width >= 85) {
            clearInterval($('#graph1'))
        } else {
            width++;
            $('#graph1').css('width', width + '%');
        }
    }
    var id = setInterval(frame2, 20);

    function frame2() {
        if (width >= 97) {
            clearInterval($('#graph2'))
        } else {
            width++;
            $('#graph2').css('width', width + '%');
        }
    }
    var id = setInterval(frame3, 20);

    function frame3() {
        if (width >= 95) {
            clearInterval($('#graph3'))
        } else {
            width++;
            $('#graph3').css('width', width + '%');
        }
    }
    var id = setInterval(frame4, 20);

    function frame4() {
        if (width >= 85) {
            clearInterval($('#graph4'))
        } else {
            width++;
            $('#graph4').css('width', width + '%');
        }
    }
    var id = setInterval(frame5, 20);

    function frame5() {
        if (width >= 90) {
            clearInterval($('#graph5'))
        } else {
            width++;
            $('#graph5').css('width', width + '%');
        }
    }
    var id = setInterval(frame6, 20);

    function frame6() {
        if (width >= 80) {
            clearInterval($('#graph6'))
        } else {
            width++;
            $('#graph6').css('width', width + '%');
        }
    }
    var id = setInterval(frame7, 20);

    function frame7() {
        if (width >= 80) {
            clearInterval($('#graph7'))
        } else {
            width++;
            $('#graph7').css('width', width + '%');
        }
    }
    //%표시
    var per = [];
    for (let i = 0; i < $('.progress-bar').length; i++) {
        if (i == 0) {
            per.push(85);
        } else if (i == 1) {
            per.push(97);
        } else if (i == 2) {
            per.push(95);
        } else if (i == 3) {
            per.push(85);
        } else if (i == 4) {
            per.push(90);
        } else if (i == 5) {
            per.push(80);
        } else if (i == 6) {
            per.push(80);
        }
        $('.progress-bar').eq(i).on('mouseover', function () {
            $('.progress-bar').eq(i).append(per[i]);
            $('.progress-bar').eq(i).mouseleave(function () {
                var test = $('.progress-bar').eq(i).text('');
            });
        });
    }

    //skill icon animation
    $('img').on('mouseover', function () {
        if ($('img').width() >= 140) {
            $(this).animate({
                width: '140px',
                height: '140px'
            }, 300, function () {
                $(this).animate({
                    width: '150px',
                    height: '150px'
                });
            });
        } else {
            $(this).animate({
                width: '110px',
                height: '110px'
            }, 300, function () {
                $(this).animate({
                    width: '150px',
                    height: '150px'
                });
            });

        }
    });

});
