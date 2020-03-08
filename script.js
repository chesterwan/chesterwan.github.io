//var updates

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;

$(window).resize(function() {
  viewportHeight = window.innerHeight;
  viewportWidth = window.innerWidth;
});

//topnav scrolling

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#topnavscroll").addClass("fold-top");
  } else {
    $("#topnavscroll").removeClass("fold-top");
  }
});

//links smooth scrolling

$("a").click(function() {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    var posOffset = (($(hash).offset().top) - (viewportHeight / 10));
    $('html, body').animate({
      scrollTop: posOffset
    }, 600);
  }
});

//landing logo parallax scrolling & topnav icon animation

$(window).scroll(function() {
  var parallaxRatio = (0 - ($(window).scrollTop() / 5) + 'vh');
  var parallaxFade = 0.5 - ($(window).scrollTop() / 500);
  //$("#logoparallax").css("bottom", parallaxRatio);
  if ($(window).width() > 768 && $(window).width() >= $(window).height()) {
    $("#logoparallax").css("transform", "translateY(" + parallaxRatio + ")");
  }
  $("#logoparallax").css("opacity", parallaxFade);
  /*
  var colorAnimation = false;
  if ($("#logoparallax").css("opacity") <= 0) {
    //$("#icon").css("color", "#009688");
    colorAnimation = true;
  } else {
    //$("#icon").css("color", "#fff");
    colorAnimation = false;
  }
  if (colorAnimation == true) {
    iconColorCycle();
  } else {
    $("#iconcolor").animate({
      color: "#fff"
    }, 1000, "linear");
  }*/
});

/*
function iconColorCycle() {
  $("#iconcolor").animate({
    color: "#009688"
  }, 3000, "linear");
  $("#iconcolor").animate({
    color: "#ff9800"
  }, 3000, "linear");
  $("#iconcolor").animate({
    color: "#fff"
  }, 3000, "linear", function() {
    if (colorAnimation == true) {
      iconColorCycle();
    }
  });
}
*/

//projects image cover

$(document).scroll(function() {
  if ((viewportWidth > 768) && (viewportWidth > viewportHeight)) {
    setInterval(function() {
      if ($(this).scrollTop() > ($("#p1sliding").offset().top - (viewportHeight / 2.5))) {
        $("#p1introimage").css("width", 50 + "%");
      } else {
        $("#p1introimage").css("width", 100 + "%");
        $("#p1details").css("max-height", 0);
        $("#p1detailstoggle > i").removeClass("fa-angle-up");
        $("#p1detailstoggle > i").addClass("fa-angle-down");
      }
      if ($(this).scrollTop() > ($("#p2sliding").offset().top - (viewportHeight / 2.5))) {
        $("#p2introimage").css("width", 50 + "%");
      } else {
        $("#p2introimage").css("width", 100 + "%");
        $("#p2details").css("max-height", 0);
        $("#p2detailstoggle > i").removeClass("fa-angle-up");
        $("#p2detailstoggle > i").addClass("fa-angle-down");
      }
      if ($(this).scrollTop() > ($("#p3sliding").offset().top - (viewportHeight / 2.5))) {
        $("#p3introimage").css("width", 50 + "%");
      } else {
        $("#p3introimage").css("width", 100 + "%");
        $("#p3details").css("max-height", 0);
        $("#p3detailstoggle > i").removeClass("fa-angle-up");
        $("#p3detailstoggle > i").addClass("fa-angle-down");
      }
      if ($(this).scrollTop() > ($("#p4sliding").offset().top - (viewportHeight / 2.5))) {
        $("#p4introimage").css("width", 50 + "%");
      } else {
        $("#p4introimage").css("width", 100 + "%");
      }
      if ($(this).scrollTop() > ($("#p5sliding").offset().top - (viewportHeight / 2.5))) {
        $("#p5introimage").css("width", 50 + "%");
      } else {
        $("#p5introimage").css("width", 100 + "%");
      }
    }, 1000);
  }
});

//project-1 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p1sliding").removeClass("hide-bottom");
  } else {
    $("#p1sliding").addClass("hide-bottom");
  }
});

//project-1 details

$("#p1detailstoggle").click(function() {
  if ($("#p1details").height() > 0) {
    $("#p1details").css("max-height", 0);
    $("#p1detailstoggle > i").removeClass("fa-angle-up");
    $("#p1detailstoggle > i").addClass("fa-angle-down");
  } else {
    $("#p1details").css("max-height", $("#p1details").prop("scrollHeight") + "px");
    $("#p1detailstoggle > i").removeClass("fa-angle-down");
    $("#p1detailstoggle > i").addClass("fa-angle-up");
  }
});

//project-2 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p2sliding").removeClass("hide-bottom");
  } else {
    $("#p2sliding").addClass("hide-bottom");
  }
});

//project-2 lightbox

$("#p2lightboxopen").click(function() {
  //event.preventDefault();
  $("#p2lightbox").addClass("reveal-top");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
});

$("#p2lightboxclose").click(function() {
  //event.preventDefault();
  $("#p2lightbox").removeClass("reveal-top");
  $("#ytplayer")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
});

//project-2 details

$("#p2detailstoggle").click(function() {
  if ($("#p2details").height() > 0) {
    $("#p2details").css("max-height", 0);
    $("#p2detailstoggle > i").removeClass("fa-angle-up");
    $("#p2detailstoggle > i").addClass("fa-angle-down");
  } else {
    $("#p2details").css("max-height", $("#p1details").prop("scrollHeight") + "px");
    $("#p2detailstoggle > i").removeClass("fa-angle-down");
    $("#p2detailstoggle > i").addClass("fa-angle-up");
  }
});

//project-3 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p3sliding").removeClass("hide-bottom");
  } else {
    $("#p3sliding").addClass("hide-bottom");
  }
});

//project-3 details

$("#p3detailstoggle").click(function() {
  if ($("#p3details").height() > 0) {
    $("#p3details").css("max-height", 0);
    $("#p3detailstoggle > i").removeClass("fa-angle-up");
    $("#p3detailstoggle > i").addClass("fa-angle-down");
  } else {
    $("#p3details").css("max-height", $("#p3details").prop("scrollHeight") + "px");
    $("#p3detailstoggle > i").removeClass("fa-angle-down");
    $("#p3detailstoggle > i").addClass("fa-angle-up");
  }
});

//project-4 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p4sliding").removeClass("hide-bottom");
  } else {
    $("#p4sliding").addClass("hide-bottom");
  }
});

//project-5 sliding

$(window).scroll(function() {
  if ($(this).scrollTop() > (0.1 * viewportHeight)) {
    $("#p5sliding").removeClass("hide-bottom");
  } else {
    $("#p5sliding").addClass("hide-bottom");
  }
});
