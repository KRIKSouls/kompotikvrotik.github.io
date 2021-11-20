$('body').on('click', '.password-control', function () {
    if ($('.InPass').attr('type') == 'password') {
        $(this).addClass('view');
        $('.InPass').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('.InPass').attr('type', 'password');
    }
    return false;
});