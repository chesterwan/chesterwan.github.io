//window resize detection

var viewportHeight = $(window).height();
var viewportWidth = $(window).width();

$(window).resize(function() {
  $("body").addClass("preload");
  //window.location.reload();
  viewportHeight = $(window).height();
  viewportWidth = $(window).width();
  setTimeout(function() {
    $("body").removeClass("preload");
  }, 300);
  /*
  if ($(this).scrollTop() < ($("#projects").offset().top) - viewportHeight * 0.4) {
    $(this).scrollTop($("#home").offset().top);
  } else if ($(this).scrollTop() + viewportHeight < ($("#contact").offset().top) - viewportHeight * 0.2) {
    $(this).scrollTop($("#projects").offset().top);
  } else {
    $(this).scrollTop($("#contact").offset().top);
  }
  */
});

/*
window.addEventListener("resize", function() {
  viewportHeight = $(window).height();
  viewportWidth = $(window).width();
}, false);
*/

//transition prevention when loading

$(document).ready(function() {
  $("body").removeClass("preload");
});

//topnav scrolling

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#topnav").addClass("fold-top");
    if (!$("#about").hasClass("reveal-right")) {
      $("#scrolltip").css("opacity", 0);
      $("#sidenavabout").css("transform", "translateX(20vw) rotate(90deg)");
    }
  } else {
    $("#topnav").removeClass("fold-top");
    if (!$("#about").hasClass("reveal-right")) {
      $("#scrolltip").css("opacity", 1);
      $("#sidenavabout").css("transform", "translateX(0) rotate(90deg)");
    }
  }
});

//links smooth scrolling

$("a").click(function() {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    var posOffset = (($(hash).offset().top) - (viewportHeight / 10));
    $("html, body").animate({
      scrollTop: posOffset
    }, 600);
  }
});

//landing logo parallax scrolling

$(window).scroll(function() {
  if ($(this).scrollTop() < (0.5 * viewportHeight)) {
    var parallaxRatio = (0 - ($(window).scrollTop() / 5) + 'vh');
    var parallaxFade = 1 - ($(window).scrollTop() / 100);
    //$("#logoparallax").css("bottom", parallaxRatio);
    if ($(window).width() > 1024 && $(window).width() >= $(window).height()) {
      $("#logoparallax, #logoeffectparallax").css("transform", "translateY(" + parallaxRatio + ")");
    }
    $("#logoparallax, #logoeffectparallax").css("opacity", parallaxFade);
  } else {
    $("#logoparallax, #logoeffectparallax").css("opacity", 0);
  }
});

//langing logo mouse animation
/*
$(window).mousemove(function() {
  var mouseX = event.pageX - (viewportWidth / 2);
  var mouseY = event.pageY - (viewportHeight / 2);
  var logoOrangeX = -mouseX / 7;
  var logoOrangeY = -mouseY / 7;
  var logoTealX = -mouseX / 7.5;
  var logoTealY = -mouseY / 7.5;
  var logoWhiteX = -mouseX / 8;
  var logoWhiteY = -mouseY / 8;
  if ($(window).scrollTop() <= 0) {
    $("#logolayerorange").css("transform", "translate(" + logoOrangeX + 'px' + "," + logoOrangeY + 'px' + ")");
    $("#logolayerteal").css("transform", "translate(" + logoTealX + 'px' + "," + logoTealY + 'px' + ")");
    $("#logolayerwhite").css("transform", "translate(" + logoWhiteX + 'px' + "," + logoWhiteY + 'px' + ")");
    $("#logolayereffect").css("transform", "translate(" + logoWhiteX + 'px' + "," + logoWhiteY + 'px' + ")");
  } else {
    $("#logolayerorange").css("transform", "translate(0px, 0px)");
    $("#logolayerteal").css("transform", "translate(0px, 0px)");
    $("#logolayerwhite").css("transform", "translate(0px, 0px)");
    $("#logolayereffect").css("transform", "translate(0px, 0px)");
  }
});
*/

//about expand and collapse

$("#topnavabout, #sidenavabout").click(function() {
  var scrollbarWidth = window.innerWidth - $(document.body).prop("clientWidth");
  $("#topnav").css("left", -scrollbarWidth);
  $("#topnav a:first-child").css("padding-left", scrollbarWidth);
  $("#sidenavabout").css({
    "left": (viewportWidth * 0.9),
    "transform": "translateX(20vw) rotate(90deg)"
  });
  $("#scrolltip").css("left", (viewportWidth * 0.5))
  $("#logoparallax, #logoeffectparallax").css("right", scrollbarWidth);
  $(document.body).css({
    "position": "relative",
    "overflow-y": "hidden"
  });
  $("#about").addClass("reveal-right");
  if ((window.matchMedia('(min-width: 1025px)').matches) && (window.matchMedia('(orientation: landscape)').matches)) {
    $("#logoparallax, #logoeffectparallax").css("left", -50 + "vw");
    $("#topnav").css("padding-left", 5 + "vw");
    $("#home").css("padding-left", 5 + "vw");
  }
  $("#scrolltip").css("opacity", 0);
  var actionDistance = (viewportWidth * 0.05) + $("#about").width() - $("#about > div").width();
  $("#about > div").css("left", actionDistance + "px");
});

$("#aboutclose, #home, #projects").click(function() {
  if ($("#about").hasClass("reveal-right")) {
    $("#topnav").css("left", 0);
    $("#topnav a:first-child").css("padding-left", 0);
    $("#sidenavabout").css({
      "left": 90 + "%",
      "transform": "translateX(0) rotate(90deg)"
    });
    $("#scrolltip").css("left", 50 + "%");
    $("#logoparallax, #logoeffectparallax").css("right", 0);
    $(document.body).css({
      "position": "static",
      "overflow-y": "scroll"
    });
    $("#about").removeClass("reveal-right");
    if ((window.matchMedia('(min-width: 1025px)').matches) && (window.matchMedia('(orientation: landscape)').matches)) {
      $("#logoparallax, #logoeffectparallax").css("left", 0);
      $("#topnav").css("padding-left", 10 + "vw");
      $("#home").css("padding-left", 10 + "vw");
    }
    $("#scrolltip").css("opacity", 1);
    $("#about > div").css("left", 5 + "vw");
  }
});

$(window).resize(function() {
  if ($("#about").hasClass("reveal-right")) {
    $("#topnavabout, #sidenavabout").click();
    if ((window.matchMedia('(min-width: 1025px)').matches) && (window.matchMedia('(orientation: landscape)').matches)) {
      $("#logoparallax, #logoeffectparallax").css("left", -50 + "vw");
      $("#topnav").css("padding-left", 5 + "vw");
      $("#home").css("padding-left", 5 + "vw");
    } else if ((window.matchMedia('(max-width: 600px)').matches)) {
      $("#logoparallax, #logoeffectparallax").css("left", 0);
      $("#topnav").css("padding-left", 5 + "vw");
      $("#home").css("padding-left", 5 + "vw");
    } else {
      $("#logoparallax, #logoeffectparallax").css("left", 0);
      $("#topnav").css("padding-left", 10 + "vw");
      $("#home").css("padding-left", 10 + "vw");
    }
  } else {
    $("#aboutclose, #home, #projects").click();
    if ((window.matchMedia('(min-width: 601px)').matches)) {
      $("#logoparallax, #logoeffectparallax").css("left", 0);
      $("#topnav").css("padding-left", 10 + "vw");
      $("#home").css("padding-left", 10 + "vw");
    } else {
      $("#logoparallax, #logoeffectparallax").css("left", 0);
      $("#topnav").css("padding-left", 5 + "vw");
      $("#home").css("padding-left", 5 + "vw");
    }
  }
});

//projects image cover animation

$(window).on("scroll resize", function() {
  //if ((viewportWidth > 768) && (viewportWidth > viewportHeight)) {}
  if ((window.matchMedia('(min-width: 1025px)').matches) && (window.matchMedia('(orientation: landscape)').matches)) {
    if ($(this).scrollTop() > ($("#p1sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p1introimage").css("width", 50 + "%");
    } else {
      $("#p1introimage").css("width", 100 + "%");
      $("#p1details, #p2details, #p3details, #p4details").css("max-height", 0);
      $("#p1detailstoggle > i, #p2detailstoggle > i, #p3detailstoggle > i, #p4detailstoggle > i").removeClass("fa-angle-up");
      $("#p1detailstoggle > i, #p2detailstoggle > i, #p3detailstoggle > i, #p4detailstoggle > i").addClass("fa-angle-down");
      $("#p1sliding, #p2sliding, #p3sliding, #p4sliding").css("background-color", "#fff");
      $("#p1introimage, #p2introimage, #p3introimage, #p4introimage").css({
        "-webkit-filter": "brightness(1)",
        "filter": "brightness(1)"
      });
    }
    if ($(this).scrollTop() > ($("#p2sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p2introimage").css("width", 50 + "%");
    } else if ($("#p2details").height() <= 0) {
      $("#p2introimage").css("width", 100 + "%");
    }
    if ($(this).scrollTop() > ($("#p3sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p3introimage").css("width", 50 + "%");
    } else if ($("#p3details").height() <= 0) {
      $("#p3introimage").css("width", 100 + "%");
    }
    if ($(this).scrollTop() > ($("#p4sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p4introimage").css("width", 50 + "%");
    } else if ($("#p4details").height() <= 0) {
      $("#p4introimage").css("width", 100 + "%");
    }
    if ($(this).scrollTop() > ($("#p5sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p5introimage").css("width", 50 + "%");
    } else {
      $("#p5introimage").css("width", 100 + "%");
    }
    if ($(this).scrollTop() > ($("#p6sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p6introimage").css("width", 50 + "%");
    } else {
      $("#p6introimage").css("width", 100 + "%");
    }
  } else {
    $("#p1introimage, #p2introimage, #p3introimage, #p4introimage, #p5introimage, #p6introimage").css("width", 100 + "%");
    if ($(this).scrollTop() <= ($("#p1sliding").offset().top - (viewportHeight / 2.5))) {
      $("#p1details, #p2details, #p3details, #p4details").css("max-height", 0);
      $("#p1detailstoggle > i, #p2detailstoggle > i, #p3detailstoggle > i, #p4detailstoggle > i").removeClass("fa-angle-up");
      $("#p1detailstoggle > i, #p2detailstoggle > i, #p3detailstoggle > i, #p4detailstoggle > i").addClass("fa-angle-down");
      $("#p1sliding, #p2sliding, #p3sliding, #p4sliding").css("background-color", "#fff");
      $("#p1introimage, #p2introimage, #p3introimage, #p4introimage").css({
        "-webkit-filter": "brightness(1)",
        "filter": "brightness(1)"
      });
    }
  }
});

//project-1 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p1sliding").addClass("reveal-top");
  } else {
    $("#p1sliding").removeClass("reveal-top");
  }
});

//project-1 lightbox

$("#lightboxopenp1").click(function() {
  var scrollbarWidth = window.innerWidth - $(document.body).prop("clientWidth");
  $("#topnav").css("left", -scrollbarWidth);
  $("#topnav a:first-child").css("padding-left", scrollbarWidth);
  $(document.body).css({
    "position": "relative",
    "overflow-y": "hidden",
    "margin-right": scrollbarWidth
  });
  $("#ytplayer").attr('src', "https://www.youtube.com/embed/7I4KskvREoA?autoplay=1&rel=0&enablejsapi=1&version=3");
  $("#lightbox").addClass("reveal-front");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

$("#lightboxclose, #lightbox").click(function() {
  $("#topnav").css("left", 0);
  $("#topnav a:first-child").css("padding-left", 0);
  $(document.body).css({
    "position": "static",
    "overflow-y": "scroll",
    "margin-right": 0
  });
  $("#lightbox").removeClass("reveal-front");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

//project-1 details

$("#p1detailstoggle").click(function() {
  if ($("#p1details").height() > 0) {
    $("#p1details").css("max-height", 0);
    $("#p1detailstoggle > i").removeClass("fa-angle-up");
    $("#p1detailstoggle > i").addClass("fa-angle-down");
    $("#p1sliding").css("background-color", "#fff");
    $("#p1introimage").css({
      "-webkit-filter": "brightness(1)",
      "filter": "brightness(1)"
    });
  } else {
    $("#p1details").css("max-height", $("#p1details").prop("scrollHeight") + "px");
    $("#p1detailstoggle > i").removeClass("fa-angle-down");
    $("#p1detailstoggle > i").addClass("fa-angle-up");
    $("#p1sliding").css("background-color", "#eceff1");
    $("#p1introimage").css({
      "-webkit-filter": "brightness(0.8)",
      "filter": "brightness(0.8)"
    });
  }
});

//project-1 alternative image

$(document).ready(function() {
  if (($("#p1r4image").width()) < $("#p1r4image").height() * 1.5) {
    $("#p1r4image").css("background-image", "url(img/refles-csv-alt.png)");
  }
  if (($("#p1r9image").width()) < $("#p1r9image").height() * 2) {
    $("#p1r9image").css("background-image", "url(img/refles-userjourney-alt.png)");
    //$("#p1r9image").attr("style", "height: 60vh !important; background-image: url(img/refles-userjourney-alt.png)");
  }
});

$(window).resize(function() {
  if (($("#p1r4image").width()) < $("#p1r4image").height() * 1.5) {
    $("#p1r4image").css("background-image", "url(img/refles-csv-alt.png)");
  } else {
    $("#p1r4image").css("background-image", "url(img/refles-csv.png)");
  }
  if (($("#p1r9image").width()) < $("#p1r9image").height() * 2) {
    $("#p1r9image").css("background-image", "url(img/refles-userjourney-alt.png)");
  } else {
    $("#p1r9image").css("background-image", "url(img/refles-userjourney.png)");
  }
});

//project-2 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p2sliding").addClass("reveal-top");
  } else {
    $("#p2sliding").removeClass("reveal-top");
  }
});

//project-2 details

$("#p2detailstoggle").click(function() {
  if ($("#p2details").height() > 0) {
    $("#p2details").css("max-height", 0);
    $("#p2detailstoggle > i").removeClass("fa-angle-up");
    $("#p2detailstoggle > i").addClass("fa-angle-down");
    $("#p2sliding").css("background-color", "#fff");
    $("#p2introimage").css({
      "-webkit-filter": "brightness(1)",
      "filter": "brightness(1)"
    });
  } else {
    $("#p2details").css("max-height", $("#p2details").prop("scrollHeight") + "px");
    $("#p2detailstoggle > i").removeClass("fa-angle-down");
    $("#p2detailstoggle > i").addClass("fa-angle-up");
    $("#p2sliding").css("background-color", "#eceff1");
    $("#p2introimage").css({
      "-webkit-filter": "brightness(0.8)",
      "filter": "brightness(0.8)"
    });
  }
});

//project-3 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p3sliding").addClass("reveal-top");
  } else {
    $("#p3sliding").removeClass("reveal-top");
  }
});

//project-3 lightbox

$("#lightboxopenp3").click(function() {
  var scrollbarWidth = window.innerWidth - $(document.body).prop("clientWidth");
  $("#topnav").css("left", -scrollbarWidth);
  $("#topnav a:first-child").css("padding-left", scrollbarWidth);
  $(document.body).css({
    "position": "relative",
    "overflow-y": "hidden",
    "margin-right": scrollbarWidth
  });
  $("#ytplayer").attr('src', "https://www.youtube.com/embed/uqYdJWJJkkY?autoplay=1&rel=0&enablejsapi=1&version=3");
  $("#lightbox").addClass("reveal-front");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

$("#lightboxclose, #lightbox").click(function() {
  $("#topnav").css("left", 0);
  $("#topnav a:first-child").css("padding-left", 0);
  $(document.body).css({
    "position": "static",
    "overflow-y": "scroll",
    "margin-right": 0
  });
  $("#lightbox").removeClass("reveal-front");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

//project-3 details

$("#p3detailstoggle").click(function() {
  if ($("#p3details").height() > 0) {
    $("#p3details").css("max-height", 0);
    $("#p3detailstoggle > i").removeClass("fa-angle-up");
    $("#p3detailstoggle > i").addClass("fa-angle-down");
    $("#p3sliding").css("background-color", "#fff");
    $("#p3introimage").css({
      "-webkit-filter": "brightness(1)",
      "filter": "brightness(1)"
    });
  } else {
    $("#p3details").css("max-height", $("#p2details").prop("scrollHeight") + "px");
    $("#p3detailstoggle > i").removeClass("fa-angle-down");
    $("#p3detailstoggle > i").addClass("fa-angle-up");
    $("#p3sliding").css("background-color", "#eceff1");
    $("#p3introimage").css({
      "-webkit-filter": "brightness(0.8)",
      "filter": "brightness(0.8)"
    });
  }
});

//project-4 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p4sliding").addClass("reveal-top");
  } else {
    $("#p4sliding").removeClass("reveal-top");
  }
});

//project-4 instruction

$("#instructionopenp4").click(function() {
  var scrollbarWidth = window.innerWidth - $(document.body).prop("clientWidth");
  $("#topnav").css("left", -scrollbarWidth);
  $("#topnav a:first-child").css("padding-left", scrollbarWidth);
  $(document.body).css({
    "position": "relative",
    "overflow-y": "hidden",
    "margin-right": scrollbarWidth
  });
  $("#instruction").addClass("reveal-front");
  var topOffset = (viewportHeight - $("#instruction .text").height()) / 2;
  if (window.matchMedia('(orientation: landscape)').matches) {
    $("#instructionclose").css("top", topOffset - 12);
  } else {
    $("#instructionclose").css("top", topOffset - 80);
  }
});

$("#instruction div").click(function() {
  event.stopPropagation();
});

$("#instructionclose, #instruction").click(function() {
  $("#topnav").css("left", 0);
  $("#topnav a:first-child").css("padding-left", 0);
  $(document.body).css({
    "position": "static",
    "overflow-y": "scroll",
    "margin-right": 0
  });
  $("#instruction").removeClass("reveal-front");
});

$(window).resize(function() {
  var topOffset = (viewportHeight - $("#instruction .text").height()) / 2;
  if (window.matchMedia('(orientation: landscape)').matches) {
    $("#instructionclose").css("top", topOffset - 12);
  } else {
    $("#instructionclose").css("top", topOffset - 80);
  }
});

//project-4 details

$("#p4detailstoggle").click(function() {
  if ($("#p4details").height() > 0) {
    $("#p4details").css("max-height", 0);
    $("#p4detailstoggle > i").removeClass("fa-angle-up");
    $("#p4detailstoggle > i").addClass("fa-angle-down");
    $("#p4sliding").css("background-color", "#fff");
    $("#p4introimage").css({
      "-webkit-filter": "brightness(1)",
      "filter": "brightness(1)"
    });
  } else {
    $("#p4details").css("max-height", $("#p4details").prop("scrollHeight") + "px");
    $("#p4detailstoggle > i").removeClass("fa-angle-down");
    $("#p4detailstoggle > i").addClass("fa-angle-up");
    $("#p4sliding").css("background-color", "#eceff1");
    $("#p4introimage").css({
      "-webkit-filter": "brightness(0.8)",
      "filter": "brightness(0.8)"
    });
  }
});

//project-5 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p5sliding").addClass("reveal-top");
  } else {
    $("#p5sliding").removeClass("reveal-top");
  }
});

//project-6 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p6sliding").addClass("reveal-top");
  } else {
    $("#p6sliding").removeClass("reveal-top");
  }
});
