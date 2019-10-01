$(document).ready(function(){

  if ($('#map').length) {
    var lat = 57.651774;
    var log = 39.829889;
    var urlBaby = window.location.hostname;
    var markerUrl = 'static/img/assets/contacts/marker.svg';
    var myMap;
    var myPlacemark;

    var init = function init() {
      myMap = new ymaps.Map("map", {
        center: [lat, log],
        zoom: 18,
        controls: []
      });
      myMap.behaviors.disable('scrollZoom');
      var myPlacemark = new ymaps.Placemark([lat, log], {}, {
        iconLayout: 'default#image',
        iconImageHref: markerUrl,
        iconImageSize: [60, 60],
        iconImageOffset: [-3, -42]
      });
      myMap.geoObjects.add(myPlacemark);
    };

    ymaps.ready(init);
  }

})