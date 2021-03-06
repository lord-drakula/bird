window.onload = function() {
    var placeholders = document.querySelectorAll('.placeholder');
    for (var i = 0; i < placeholders.length; i++) {
      loadImage(placeholders[i]);
    }
  
    function loadImage(placeholder) {
      var small = placeholder.children[0];
  
      // 1: load small image and show it
      var img = new Image();
      img.src = small.src;
      img.onload = function() {
        small.classList.add('loaded');
      };
  
      // 2: load large image
      var imgLarge = new Image();
      imgLarge.src = placeholder.dataset.large;
      imgLarge.onload = function() {
        imgLarge.classList.add('loaded');
      };
      placeholder.appendChild(imgLarge);
    }
  }