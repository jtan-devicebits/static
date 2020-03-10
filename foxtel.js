var zoom = 0;

function Zoom(imageID) {
  var yourImg = document.getElementById(imageID);

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

