//*------------------------------loader-------------------

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});


//*------------------------------Fixed-------------------
$(window).scroll(function () {
    if ($(window).scrollTop() > -10) {
        $('#desktop-menu').css('top', $(window).scrollTop());
    }
}
);

// --------------------- Food Gallery -----------------------//

$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $(".food")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})
