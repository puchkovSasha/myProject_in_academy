
$( document ).ready(function(){
  $( ".header-contact__button" ).on('click', function(){ // задаем функцию при нажатиии на элемент <button>
    $( ".overlay" ).show(); // вызываем событие click на элементе <div>
  });
  $( ".poppup-close" ).on('click', function(){ // задаем функцию при нажатиии на элемент <div>
    $( ".overlay" ).hide(); // отображаем, или скрываем элемент
  });
});
												/*jquery*/

/*var overlay     = document.getElementsByClassName('overlay')[0],
				closePoppup = document.getElementsByClassName('poppup-close')[0],
				orderBtn    = document.getElementsByClassName('header-contact__button')[0];

function close() {
  overlay.style.display = 'none';
  closePoppup.style.color = 'red';

}
function open() {
  overlay.style.display = 'block';

}

orderBtn.addEventListener('click', open);
closePoppup.addEventListener('click', close);*/
							
							/*full js*/


