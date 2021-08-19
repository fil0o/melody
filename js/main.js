$(document).ready(function () {
  let currentFloor = 2; // переменная с текущим этажом
  let counterUp = $('.counter-up')
  let counterDown = $('.counter-down')
  let floorPath = $('.home__image path') // каждый отдельный этаж в svg
  
  // Взаимодействие при наведении на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor')
    currentFloor = $(this).attr('data-floor')
    $('.counter-text').text(currentFloor)
  })

  //  Функиция отслеживания нажатия на стрелку вверх, увеличение этажа
  counterUp.on('click', () => {
    if (currentFloor < 18) {
      currentFloor++
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $('.counter-text').text(usCurrentFloor)
      floorPath.removeClass('current-floor')
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
      } 
  })

  //  Функиция отслеживания нажатия на стрелку вниз, уменьшение этажа
  counterDown.on('click', () => {
    if (currentFloor > 2) {
      currentFloor--
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $('.counter-text').text(usCurrentFloor)
      floorPath.removeClass('current-floor')
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
      } 
  })


});