$(document).ready(function () {
    $('section.etc_graph').hide();

    var width1 = 1;
    var id = setInterval(frame1, 10);

    function frame1() {
        if (width1 >= 85) {
            clearInterval($('#graph1'))
        } else {
            width1++;
            $('#graph1').css('width', width1 + '%');
        }
    }
    var id = setInterval(frame2, 10);
    var width2 = 1;
    function frame2() {
        if (width2 >= 97) {
            clearInterval($('#graph2'))
        } else {
            width2++;
            $('#graph2').css('width', width2 + '%');
        }
    }
    var id = setInterval(frame3, 10);
    var width3 = 1;
    function frame3() {
        if (width3 >= 95) {
            clearInterval($('#graph3'))
        } else {
            width3++;
            $('#graph3').css('width', width3 + '%');
        }
    }
    var id = setInterval(frame4, 10);
    var width4 = 1;
    function frame4() {
        if (width4 >= 85) {
            clearInterval($('#graph4'))
        } else {
            width4++;
            $('#graph4').css('width', width4 + '%');
        }
    }
    var id = setInterval(frame5, 10);
    var width5 = 1;
    function frame5() {
        if (width5 >= 90) {
            clearInterval($('#graph5'))
        } else {
            width5++;
            $('#graph5').css('width', width5 + '%');
        }
    }
    var id = setInterval(frame6, 10);
    var width6 = 1;
    function frame6() {
        if (width6 >= 80) {
            clearInterval($('#graph6'))
        } else {
            width6++;
            $('#graph6').css('width', width6 + '%');
        }
    }
    var id = setInterval(frame7, 10);
    var width7 = 1;
    function frame7() {
        if (width7 >= 80) {
            clearInterval($('#graph7'))
        } else {
            width7++;
            $('#graph7').css('width', width7 + '%');
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
        } else if (i == 7) {
            per.push(65);
        } else if (i == 8) {
            per.push(70);
        } else if (i == 9) {
            per.push(50);
        }
        $('.progress-bar').eq(i).on('mouseover', function () {
            $('.progress-bar').eq(i).append(per[i]);
            $('.progress-bar').eq(i).mouseleave(function () {
                var test = $('.progress-bar').eq(i).text('');
            });
        });
    }

    //skill icon animation
    $('img.etc_icon').on('mouseover', function() {
         if ($(this).width() >= 80) {
            $(this).animate({
                width: '95px',
                height: '95px'
            }, 300, function () {
                $(this).animate({
                    width: '100px',
                    height: '100px'
                });
            });
        } else {
            $(this).animate({
                width: '65px',
                height: '65px'
            }, 300, function () {
                $(this).animate({
                    width: '70px',
                    height: '70px'
                });
            });
        }

    });
    $('img:lt(7)').on('mouseover', function () {
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
                width: '90px',
                height: '90px'
            }, 300, function () {
                $(this).animate({
                    width: '100px',
                    height: '100px'
                });
            });
        }
    });

    $('input').on('click', function () {
        $('.etc_graph').fadeToggle();
        var width8 = 1;
        var id = setInterval(frame8, 10);

        function frame8() {
            if (width8 >= 65) {
                clearInterval($('#graph8'))
            } else {
                width8++;
                $('#graph8').css('width', width8 + '%');
            }
        }
        var id = setInterval(frame9, 10);
        var width9 = 1;
        function frame9() {
            if (width9 >= 70) {
                clearInterval($('#graph9'))
            } else {
                width9++;
                $('#graph9').css('width', width9 + '%');
            }
        }
        var id = setInterval(frame10, 10);
        var width10 = 1;
        function frame10() {
            if (width10 >= 50) {
                clearInterval($('#graph10'))
            } else {
                width10++;
                $('#graph10').css('width', width10 + '%');
            }
        }

    });
});
