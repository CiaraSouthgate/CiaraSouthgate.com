$("#myName").hover(
  function () {
    $("#popup").css("animation", "fade-in .5s forwards");
    console.log("hover");
  },
  function () {
    $("#popup").css("animation", "fade-out .5s forwards");
  }
);

//  $("#worked").hover(
//    function() {
//      $("#worked").html("played");
//    },
//    function() {
//      $("#worked").html("worked");
//    }
//  )

var animateLogos = function () {
  var elems, windowHeight;

  function init() {
    elems = $(".hidden");
    windowHeight = $(window).height();
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= -60) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "slide-in-element"
        );
      }
    }
  }
  return {
    init: init
  };
};
animateLogos().init();

window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 90);
});

var proj = $("#gallery").find(".projectDiv");
var descriptionVisible = false;
var projectVisible = 0;

$("#next").click(function() {
  var current = proj[projectVisible];
  var next = proj[projectVisible + 1];
  if ($(window).width() < 768) {
    if (!descriptionVisible) {
      let description = $(current).find(".description");
      $(description).css("animation", "appear 1s forwards");
      descriptionVisible = true;

      $("#previous").css("display", "table-cell");

      if (projectVisible + 1 == proj.length) {
        $("#next").css("display", "none");
      }
    } else {
      $(next).find(".description").css("opacity", "0");
      $(current).css("animation", "disappear 1s forwards");
      $(next).css("display", "inline-block");
      $(next).css("animation", "appear 1s forwards");
      $(current).css("display", "none");

      descriptionVisible = false;
      projectVisible++;
    }
  } else {
    $(current).css("animation", "disappear 1s forwards");
    $(next).css("display", "block");
    $(next).css("animation", "appear 1s forwards");
    $(current).css("display", "none");

    $("#previous").css("display", "table-cell");

    projectVisible++;

    if (projectVisible + 1 == proj.length) {
        $("#next").css("display", "none");
      }
  }
});

$("#previous").click(function() {
  var current = proj[projectVisible];
  var next = proj[projectVisible - 1];
  if ($(window).width() < 768) {
    if (descriptionVisible) {
      let description = $(current).find(".description");
      $(description).css("animation", "disappear 1s forwards");
      descriptionVisible = false;

      $("#next").css("display", "table-cell");

      if (projectVisible == 0) {
        $("#previous").css("display", "none");
      }
    } else {
      $(next).find(".description").css("opacity", "1");
      $(current).css("animation", "disappear 1s forwards");
      $(next).css("display", "inline-block");
      $(next).css("animation", "appear 1s forwards");
      $(current).css("display", "none");

      descriptionVisible = true;
      projectVisible--;
    }
  } else {
    $(current).css("animation", "disappear 1s forwards");
    $(next).css("display", "block");
    $(next).css("animation", "appear 1s forwards");
    $(current).css("display", "none");

    $("#next").css("display", "table-cell");

    projectVisible--;

    if (projectVisible == 0) {
      $("#previous").css("display", "none");
    }
  }
});
