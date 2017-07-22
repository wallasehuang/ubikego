$(document).ready(function() {
    $('#action').click(function() {
        var id = $('#id').val();
        // var type = 0;
        // var text_1 = '刷卡(取車)';
        // var text_2 = '刷卡(還車)';
        // if ($(this).html() == text_1) {
        //     $(this).html(text_2);
        //     type = 0;
        // } else {
        //     $(this).html(text_1);
        //     type = 1;
        // }
        $('#id').val('');
        console.log('action click id:', id);
        console.log('action click type:', type);
        // card_in_out(id, type);
    });
});

function card_in_out(id, type) {
    var data = {};
    data.id = id;
    data.type = type;
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3000/api/card_in_out',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        }
    });
}