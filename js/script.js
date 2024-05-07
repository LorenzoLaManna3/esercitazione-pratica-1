var modal = document.getElementById("idmodal");
var images = document.getElementsByClassName('imgmodal')
var modalImg = document.getElementById("img01");


for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt; // forse posso togliere 
    }
}

var span = document.getElementsByClassName("close")[0];

// per chiudere
span.onclick = function() { 
  modal.style.display = "none";
}
