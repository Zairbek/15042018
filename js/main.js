window.onload = function () {
  document.getElementById('menu-hide').addEventListener('click', function(){
    var menuSlide = document.getElementById('menu-slide');
    if(menuSlide.hidden){
      menuSlide.hidden = false;
    }else{
      menuSlide.hidden = true;
    }
  }) 
}
