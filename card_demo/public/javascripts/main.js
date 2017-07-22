$(document).ready(function() {
    $('#action').click(function() {
        var userid = 1;
        var state = $('#state').val();
        console.log('main.js 5', state);
        // if (state == 1) {
        //     console.log('main.js 5', state);
        //     state = 0;
        //     console.log('main.js 7', state);
        // } else if (state == 0) {
        //     console.log('main.js 8', state);
        //     state = 1;
        //     console.log('main.js 11', state);
        // }
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
        change(userid, state);
        // card_in_out(id, type);
    });
});

function change(userid, state) {
    console.log('userid', userid);
    console.log('state', state);
    var data = new FormData();
    data.append('userid', userid);
    data.append('state', state);
    $.ajax({
        type: 'POST',
        data: data,
        processData: false,
        contentType: false,
        url: 'http://140.120.54.104:8001/hackntu/public/api/carddata',
        success: function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
            window.location.replace("http://localhost:3000/");
        }
    });
}