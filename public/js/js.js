$(function () {

    $('#send').submit(function (e) {
        e.preventDefault();
        var title = $(this).find('input[name=title]').val();
        var comment = $(this).find('input[name=comment]').val();

        var data = {
            title: title,
            comment: comment
        }

        var ser = $(this).serialize();


        $.ajax({
            url: '/add',
            type: 'post',
            data: ser,
            success: function (data) {
                $('ul').load('/ ul > *');
            }
        })
    });

    moment.locale('ru');
    console.log(moment('2018-01-22T01:00:00+03:00').startOf('hour').fromNow());

})


function addComment($this) {
    if ($($this).hasClass('open')) {
        $($this).removeClass('open');
        $($this).next().slideUp();
    } else {
        $($this).addClass('open');
        $($this).next().slideDown();
    }


}