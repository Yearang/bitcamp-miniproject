$(document).ready(function () {
    $('#insert').on('click', function () {

        if ($('#text_talk').val() != '') {
            console.log($('#text_talk').val());
            var newTalk = $('#text_talk').val();
            var newList = document.createElement('li');
            newList.append(newTalk);
            $('#text_talk').before(newList);
            $('#text_talk').val('');
        }
    });

});
