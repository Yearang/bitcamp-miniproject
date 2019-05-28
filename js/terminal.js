function newInput() {
    $('.command:last').after('<div class="command">');
    $('.command:last').append('<b>koyearang@kyr-com</b>:~$ ').append('<input type="text" class="terminalipnut">');
}
$(document).ready(function () {
    $('#terminalModal').on('shown.bs.modal', function () {
        $('.modal-body').append('<div class="command">');
        $('.command:last').append('<b>koyearang@kyr-com</b>:~$ ').append('<input type="text" class="terminalipnut">');
        $('.terminalipnut').focus();
    });

    $(".close").on('click', function () {
        $("#terminalModal").modal("hide");
    });

    $('#terminalModal').on('hidden.bs.modal', function (e) {
        console.log('modal close');
        //        $(this).find('form')[0].reset()
        $('.modal-body').empty();
        a();
    });
    $('.modal-body').on('click', function () {
        $('.terminalipnut').focus();
    });

    $('.modal-body').on('keydown', 'input', (function (key) {
        if (key.keyCode == 13) {
            var input = $(this).val();
            $('.command:last').append(input);
            if (input == 'help') {
                $('.command:last').append("<p>yearang, jiseon, jiyeon, kyeong jin terminal, version 1.0.0")
                    .append('<br>help - show all commands<br>')
                    .append('whoami - show information about yearang<br>')
                    .append('date - show current time<br>')
                    .append('move [page] - move to page<br>')
                    .append('exit - close terminal</p>');
            } else if (input == 'whoami') {
                $('.command:last').append("<p>I'm yearang!</p>");
            } else if (input == 'date') {
                var date = new Date();
                $('.command:last').append('<p>' + date + '</p>');
            } else if (input == 'exit') {
                console.log($('#close_modal'));
                $('.close').trigger('click');
                return;
            } else if (input.substring(0, 4) == 'move') {
                var to = input.substring(5, );
                to = $.trim(to).toLowerCase();
                console.log(to);
                var url = '';
                if (to == 'home') {
                    url = 'index.html';
                    console.log('url' + url);
                } else if (to == 'portfolio' || to == 'portfoliolist') {
                    url = 'portfolioList.html';
                } else if (to.substring(0, 9) == 'portfolio') {
                    url = 'portfolioDetail' + to.substring(9, 10) + '.html';
                    console.log(url);
                } else if (to == 'terminal') {
                    $('.command:last').append("<p>Here is terminal!</p>");
                    $(this).remove();
                    newInput();
                    $('.terminalipnut').focus();
                    return;
                } else if (to == 'about' || to == 'skills' || to == 'contact') {
                    url = to + '.html';
                } else {
                    $('.command:last').append('<p>' + input + ': command not found</p>');
                    $(this).remove();
                    newInput();
                    $('.terminalipnut').focus();
                    return;
                }
                $(location).attr('href', url);
            } else {
                $('.command:last').append('<p>' + input + ': command not found</p>');
            }
            $(this).remove();
            newInput();
            $('.terminalipnut').focus();
        }
    }));
});
