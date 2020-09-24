

var $items = $('.cardfilter');
var $btns = $('.filterbtn').click(function () {
    if (this.id == 'all') {
        $items.show();
    } else {
        var $el = $('.' + this.id).show();
        $items.not($el).hide();
    }
    $btns.removeClass('active');
    $(this).addClass('active');
})

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("Nav-Bar").style.padding = " 8px 0px 8px";
        document.getElementById("navbar-brand").style.fontSize = "25px";
        document.getElementById("Nav-Bar").style.backgroundColor = "#fff";
    } else {

        document.getElementById("Nav-Bar").style.padding = "15px 0px 15px";
        document.getElementById("Nav-Bar").style.backgroundColor = "#f9f9fd";
        document.getElementById("navbar-brand").style.fontSize = "30px";
    }
}


