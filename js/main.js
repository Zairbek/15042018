window.onload = function () {
  swipeForShow('+', 'swipeBtnToShow', 'swipeElement','0.3');

}

 
function getId (idArgument) {                   // Функция для быстрое получение ID   
  return document.getElementById(idArgument);
}




function swipeForShow(axicX = '+', swipeBtnToShow, swipeElement, delay = '0.4'){
  var swipeBtnToShow = getId(swipeBtnToShow);
  var swipeElement = getId(swipeElement);

  var widthElement = swipeElement.offsetWidth;
  var axicX = axicX;  
  

  swipeBtnToShow.addEventListener('click', action);
  
  function action(elem){
    if(swipeElement.style.transform){
      swipeElement.style.transform = null;
    }else{
      swipeElement.style.transition = 'transform ' + delay +'s ease-out';
      swipeElement.style.transform = 'translateX(' + axicX + widthElement + 'px)';
    } 
  }
}