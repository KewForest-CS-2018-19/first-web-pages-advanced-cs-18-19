//detects protrait vs landscape images
document.addEventListener("DOMContentLoaded", function(event) {

  var addImageOrientationClass = function(img) {
    if(img.naturalHeight > img.naturalWidth) {
      img.classList.add("portrait");
    }
  }

  // Add "portrait" class to thumbnail images that are portrait orientation
  var images = document.querySelectorAll(".album-thumbnails");
  for(var i=0; i<images.length; i++) {
    if(images[i].complete) {
      addImageOrientationClass(images[i]);
    } else {
      images[i].addEventListener("load", function(evt) {
        addImageOrientationClass(evt.target);
      });
    }
  }

});


//for importing HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
