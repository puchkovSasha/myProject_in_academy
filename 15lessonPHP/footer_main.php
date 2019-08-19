<section  class="maps">
  <div id="map" class="map">
    <script>
            ymaps.ready(function () {

               var myMap = new ymaps.Map('map', {
          center: [54.752656, 56.002053],
          zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),


        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),


        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Good cardboard',
            balloonContent: 'г. Уфа, Проспект октября, 46'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps/Map-Marker-maps.png',
            // Размеры метки.
            iconImageSize: [17, 25],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-8, -25],
            iconContentLayout:MyIconContentLayout
        });

        myMap.geoObjects
             .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');

     });
  </script>

  </div>


  <div class="form-maps">
  <div class="container">
    <div class="form-maps-wrap">
      <div class="form-maps-block">
        <div class="form-maps-block__img">
          <img src="img/maps/Map-Marker-maps.png" alt=""></div>
          <div class="form-maps-block-text">
            
          <div class="form-maps-block__title">
            <span>Адрес офиса</span><br>
            г. Уфа, Проспект октября, 46
          </div>
          <div class="form-maps-block__title">
            <span>Адрес склада</span><br>
            г. Уфа, ул. Майкопская, 65/2
          </div>
          </div>
        
      </div>
      <div class="form-maps-block">
        <div class="form-maps-block__img">
          <img src="img/maps/phone-maps.png" alt="">
        </div>
        <div class="form-maps-block-text">
          
          <div id="phone" class="form-maps-block__title">
            <span>Тел. отдела продаж:</span><br>
            8 (347) 271-54-28 <br> 
            8 (937) 363-30-00
            <button class="btnn btnn-maps">Заказать звонок</button>

          </div>
        </div>
        
      </div>
      <div class="form-maps-block">
        <div class="form-maps-block__img clear-img">
          <img src="img/maps/mail-maps.png" alt=""></div>
          <div class="form-maps-block-text">
            
          <div class="form-maps-block__title">
            <span>Е-mail</span><br>
            <a href="mailto:urals.karton@gmail.com">urals.karton@gmail.com</a>
          </div>
        
          </div>
      </div>
    </div>
  </div>
</div>
</section>

<footer class="footer">
  <div class="footer-title">© www.gofra-ural.ru 2016, все права защищены</div>
</footer>

<script  src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script  src="js/poppup.js"></script>
<script  src="js/wow.min.js"></script>
<script src="js/slick/slick.min.js"></script>
<script src="js/logo.js" ></script>
<script src="js/fotorama.js" ></script>






 
<script>
 $('.multiple-items').slick({

  // centerMode: true,
  dots: true,
  arrows: false,

  centerPadding: '60px',

  slidesToShow: 3,

  responsive: [

    

    {

      breakpoint: 480,

      settings: {

        arrows: false,

        centerMode: true,


        slidesToShow: 1

      }

    }

  ]

});

</script>

  <script>
       new WOW().init();
  </script>
 

 


  </body>