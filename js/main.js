window.onload = function () {
  swipeForShow('+', 'swipeBtnToShow', 'swipeElement','0.5');

}

//==================== Функция для быстрое получение ID
function getId (idArgument) {   
  return document.getElementById(idArgument);
}//==================== Функция для быстрое получение ID






// ==================   swipeForShow
function swipeForShow(axicX = '+', swipeBtnToShow, swipeElement, delay = '0.4'){
// axicX (по умолчанию "+") - направление по оси х
// swipeBtnToShow - кнопка для появление элемента
// swipeElement - появляюший элемент
// delay (по умолчанию "0.5" секунд) - задержка, интервал время появление элемента
  var swipeBtnToShow = getId(swipeBtnToShow);
  var swipeElement = getId(swipeElement);

  var widthElement = swipeElement.offsetWidth;
  var axicX = axicX;  
  
  var xForHide = getId('x-for-hide');
  
  xForHide.addEventListener('click', function(){
    swipeElement.style.transform = null;
  })

  swipeBtnToShow.addEventListener('click', action);

  function action(elem){
    if(swipeElement.style.transform){
      swipeElement.style.transform = null;

    }else{
      swipeElement.style.transition = 'transform ' + delay +'s ease-in-out';
      swipeElement.style.transform = 'translateX(' + axicX + widthElement + 'px)';
    } 
  }
}// ==================   swipeForShow
