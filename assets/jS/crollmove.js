// $(document).ready(function() {

//     $('.footer-links a').on("click",function(e){e.preventDefault();
//     //.click(function(event) {
//     //event.preventDefault();
    
//     part = $(this).attr('href'); // lấy id của thẻ h2 tương ứng
    
//     position = $(part).offset().top; // tìm vị trí thẻ h2
    
//     $('html, body').animate({scrollTop:$(a).offset().top-10},500)})
//     //.animate({scrollTop: position},1400,'easeInOutSine');
//     //});
// });

var $root = $('html, body');
 
$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');
 
    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });
 
    return false;
});