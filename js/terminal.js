function a() {
    $('.command:last').after('<div class="command">');
    $('.command:last').append('<b>koyearang@kyr-com</b>:~$ ').append('<input type="text" class="terminalipnut">');
}
$(document).ready(function () {
//    $("#modal_show").click(function () {
//        $("#terminalModal").modal("show");
//    });
    $('#terminalModal').on('shown.bs.modal', function () {
        $('.modal-body').append('<div class="command">');
        $('.command:last').append('<b>koyearang@kyr-com</b>:~$ ').append('<input type="text" class="terminalipnut">');
        $('.terminalipnut').focus();
    });

    $("#close_modal").click(function () {
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
            console.log('aa');
            var input = $(this).val();
            $('.command:last').append(input);
            if (input == 'help') {
                $('.command:last').append("<p>yearang's terminal, version 1.0.0 <br>")
                    .append('help - show all commands<br>')
                    .append('whoami - show information about yearang<br>')
                    .append('date - show current time<br>')
                    .append('exit - close terminal</p>');

            } else if (input == 'whoami') {
                $('.command:last').append("<p>I'm yearang!</p>");
            } else if (input == 'date') {

            } else if (input == 'exit') {
                $('#terminalModal').modal('hide');
                return false;
            } else {
                $('.command:last').append('<p>' + input + ': command not found</p>');
            }
            $(this).remove();
            a();
            $('.terminalipnut').focus();
        }
    }));
});
