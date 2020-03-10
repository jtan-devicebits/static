function Zoom() {
  var yourImg = document.getElementById('myImg');
  var zoom = 0;

  if(yourImg && yourImg.style) {

      if (zoom === 0) {
        yourImg.style.height = '100%';
        yourImg.style.width = '100%';
        yourImg.style.maxWidth = '100%';
        zoom = 1;
      } else {
        yourImg.style.height = '';
        yourImg.style.width = '';
        yourImg.style.maxWidth = '';
        zoom = 0;
      }

  }
}

