$(document).ready(function () {
  $("#myName").hover(
    function () {
      $("#popup").css("animation", "fade-in .5s forwards");
    },
    function () {
      $("#popup").css("animation", "fade-out .5s forwards");
    }
  );

  var animateLogos = function () {
    var elems;
    var windowHeight;

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
  
  var descriptionVisible = false;
  var projects = 
  
  $("#next").click(function() {
    if ($(window).width() < 768 && !descriptionVisible) {
      $("#mmDescription").css("animation", "appear 1s forwards");
      $("#previous").css("display", "initial");
      $("#next").css("display", "none");
      descriptionVisible = true;
    }
  });
  
  $("#previous").click(function() {
    if ($(window).width() < 768 && descriptionVisible) {
      $("#mmDescription").css("animation", "disappear 1s forwards");
      $("#previous").css("display", "none");
      $("#next").css("display", "initial");
      descriptionVisible = false;
    }
  });
  
});
