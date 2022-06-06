var els = document.getElementsByClassName("header_btn");
for (var i = 0; i < els.length; i++) {
  els[i].addEventListener("click", function (event) {
    changeBackground(this.id);
  });
}
function changeBackground(id) {
  const cls = [
    "bg-default",
    "bg-next",
    "bg-preview"
  ];
  document.querySelector("body").classList.remove(...cls);
  switch (id) {

    case "default":
      document.querySelector("body").classList.add("bg-default");
      break;

    case "next":
      document
        .querySelector("body")
        .classList.add("bg-next");
      break;

    case "preview":
      document.querySelector("body").classList.add("bg-preview");
      break;

    default:
      console.log("switch caught nothing");
      break;
  }
};

$(window).on('load', function () {
$("#coverScreen").hide();});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop () > $nav.height());
  });
});

$(window).scroll(function() {
  $('.fadedfx').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+500) {
      $(this).addClass("fadeIn");
    }
  });
});
baguetteBox.run('.demo', {
  captions: true, // display image captions.
  buttons: 'auto', // arrows navigation
  fullScreen: false,
  noScrollbars: false,
  bodyClass: 'baguetteBox-open',
  titleTag: false,
  async: false,
  preload: 2,
  animation: 'slideIn', // fadeIn or slideIn
  verlayBackgroundColor: 'rgba(0,0,0,.8)'
});

$(function() {
  var availableTags = ["Parrot","Piagon","Dove","Swan",];  
  var NoResultsLabel = "No Results";

  $("#tags").autocomplete({
      source: function(request, response) {
          var results = $.ui.autocomplete.filter(availableTags, request.term);

          if (!results.length) {
              results = [NoResultsLabel];
          }

          response(results);
      },
      select: function (event, ui) {
          if (ui.item.label === NoResultsLabel) {
              event.preventDefault();
          }
      },
      focus: function (event, ui) {
          if (ui.item.label === NoResultsLabel) {
              event.preventDefault();
          }
      }
  });
});