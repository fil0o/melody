$(document).ready(function () {
  let currentFloor = 2; // переменная с текущим этажом
  const counterUp = $('.counter-up')
  const counterDown = $('.counter-down')
  const floorPath = $('.home__image path') // каждый отдельный этаж в svg
  const modal = $('.modal') // модальное окно
  const modalCloseBtn = $('.modal-close-btn') // кнопка закрытия модального окна
  const viewFlatsBtn = $('.view-flats') // кнопка просмотра квартир на этаже
  const flatPath = $('.flats path') // квартиры на этаже

  // Взаимодействие при наведении на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor')
    currentFloor = $(this).attr('data-floor')
    $('.counter').text(currentFloor)
  })

  // Функция нажатия на этаж
  floorPath.on('click', toggleModal)
  // Функция закрытия модального окна
  modalCloseBtn.on('click', toggleModal)
  // Функция нажания на кнопку смотреть квартиры на этаже
  viewFlatsBtn.on('click', toggleModal)
  

  //  Функиция отслеживания нажатия на стрелку вверх, увеличение этажа
  counterUp.on('click', () => {
    if (currentFloor < 18) {
      currentFloor++
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $('.counter').text(usCurrentFloor)
      floorPath.removeClass('current-floor')
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
      } 
  })

  //  Функиция отслеживания нажатия на стрелку вниз, уменьшение этажа
  counterDown.on('click', () => {
    if (currentFloor > 2) {
      currentFloor--
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
      $('.counter').text(usCurrentFloor)
      floorPath.removeClass('current-floor')
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor')
      } 
  })

  // Функция открыть закрыть окно
  function toggleModal() {
    modal.toggleClass('is-open')
  }

  // Функция отслеживания наведения на конкретную квартиру на картинке
  flatPath.on('mouseover', function(){
    $('.flat-link').removeClass('current-flat') // Удаляем активный класс у всех квартир
    $(`[data-flat-link=${$(this).attr('data-flat')}]`).toggleClass('current-flat') // Добавляем активный класс для всех квартир
  })

  // Функция отслеживания наведения на конкретную квартиру на списке
  $('.flat-link').on('mouseover', function() {
    flatPath.removeClass('current-flat')
    $(`[data-flat=${$(this).attr('data-flat-link')}]`).toggleClass('current-flat')
  })


});