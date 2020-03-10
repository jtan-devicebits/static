var zoom = {}

function Zoom(imageID) {
  var yourImg = document.getElementById(imageID);

  if(yourImg && yourImg.style) {

      if (zoom[imageID]===0) {
        yourImg.style.height = '100%';
        yourImg.style.width = '100%';
        yourImg.style.maxWidth = '100%';
        zoom[imageID] = 1;
      } else {
        yourImg.style.height = '';
        yourImg.style.width = '';
        yourImg.style.maxWidth = '';
        zoom[imageID] = 0;
      }

  }
}

