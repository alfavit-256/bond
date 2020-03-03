/*=========================================
                Preloader
============================================*/
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/*=========================================
              Responsive Tabs
============================================*/
$(function () {
	
	$("#langs-tabs").responsiveTabs({
		animation: 'slide',
	});

});

/* =========================================
              Stats
============================================ */
$(function () {

    $(".stats-p").counterUp({
        delay: 10,
        time: 2000
    });

});

/* =========================================
              Google Map
============================================ */
$(window).on('load', function () {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 41.31185541,
        lng: 69.27927017
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});