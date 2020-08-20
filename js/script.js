$(document).ready(function () {
   let burger = $('.column-3__menu-burger')
   let menu = $('.column-3__playlist')
   $(burger).on('click', e => {
      $(menu).toggleClass('column-3__active-burger')
   })
   let click = $('.click-filter');
   let colorCont = $('.filter')

   for (let element of click) {

      $(element).on('mouseup', e => {
         //console.log($(element).attr('data-x'));
         let spamsClassName = $(element).attr('data-x')
         console.log(spamsClassName);
         for (let elem of colorCont) {
            if (!$(elem).hasClass(spamsClassName)) {
               //console.log(elem);
               $(elem).addClass('main__closing')
            }
            else $(elem).removeClass('main__closing');
         }
         $('.click-filter-all').on('click', e => {
            $(colorCont).removeClass('main__closing')
         })
      })
   }
});