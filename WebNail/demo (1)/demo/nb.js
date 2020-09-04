setTimeout(function () {
    $('.owl-item.active .movedown').addClass('moveup');
    $('.owl-item.active .deg-bg').addClass('scale');
}, 1);

$('.arrow-down').hide();
setTimeout(function () {
    $('.arrow-down').show();
}, 3000);

$(document).on("click", ".owl-next", function () {
    // alert("hello");
    $('.owl-item .deg-bg').removeClass('scale');
    $('.owl-item .movedown').removeClass('moveup');
    $('.owl-item.active .deg-bg').addClass('scale');
    setTimeout(function () {
        $('.owl-item.active .movedown').addClass('moveup');
    }, 2000);

})

$(document).on("click", ".owl-prev", function () {
    $('.owl-item .deg-bg').removeClass('scale');
    $('.owl-item .movedown').removeClass('moveup');
    $('.owl-item.active .movedown').addClass('moveup');
    $('.owl-item.active .deg-bg').addClass('scale');
})

$(document).on("click", ".navbar-toggler", function () {
    if ($(this).hasClass("active-toogle")) {
        $('.navbar-toggler').removeClass('active-toogle');
    } else
        $('.navbar-toggler').addClass('active-toogle');

})

$(document).on("click", ".buttonTop", function () {
    $("html, body").animate({ scrollTop: 0 }, 500, 'swing');

})
$(document).on("click", ".arrow-down", function () {
    $("html, body").animate({ scrollTop: listServices }, 1000, 'swing');

})
$('.grid').masonry({
    itemSelector: '.grid-item',

})

$(document).on("click", ".msr-img", function () {
    var src1 = $(this).attr("src");
    console.log(src1);
    $('.addimg').attr("src", src1);
    $('.modal').modal('show');
})
$(document).on("click", ".btnRM", function () {
    console.log("hihi");
    myFunctionRM();
})

// $(document).ready(function(){

    // click sv
    $(document).on('click','.deg-service',function(){
        var cateId=$(this).attr('data');

        console.log(cateId);
        // $('.button3').parent().removeClass('service-active');
        // $(this).parent().addClass('service-active');
        
        $('.fullSer').removeClass('deg-show').addClass('deg-none');

        $('#'+cateId).addClass('deg-show');
        var scroll = $('#'+cateId).offset().top-50;
        console.log(scroll)
        $('html, body').animate({scrollTop :scroll },1000);
    })
    // end click
// });


window.onscroll = function () { myFunction() };

var sticky = $('#c-cus').offset().top;
var listServices = $('.ourServices').offset().top - 100;


function myFunction() {
    if (window.pageYOffset > sticky) {
        $('#c-cus').addClass("sticky");
        $('.buttonTop').show();
    } else {
        $('#c-cus').removeClass("sticky");
        $('.buttonTop').hide();
    }
}


function myFunctionRM() {
    
    var dots = document.getElementsByClassName("dots")[0];
    var moreText = document.getElementsByClassName("more");
    var btnText = document.getElementsByClassName("myBtnRM");

    if (dots.style.display[0] === "none") {
        dots.style.display[0] = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display[0] = "none";
    } else {
        dots.style.display[0] = "none";
        btnText.innerHTML = "Read less";
        // moreText.style.display[0] = "inline";
    }
}
// show more
$(document).ready(function() { 
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "<i class='deg-text-index mt-3 ' style='font-size:14px;text-decoration:underline; color:yellow; '>Show more </i>";
    var lesstext = "<i class='deg-text-index mt-3 ' style='font-size:14px;text-decoration:underline; color:yellow'>Show less </i>";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses ">' + ellipsestext+ '&nbsp;</span>'+
            '<span class="morecontent"><span>' + h + 
            '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="morelink "><i class="deg-text-index" style="font-size:14px">' +
             moretext + '</i></a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(document).on("click", ".morelink",function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
// end show more
