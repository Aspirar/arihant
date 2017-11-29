var nav = document.getElementById('primary-nav');
var menuButton = document.getElementById('menu-btn');
var crossButton = document.getElementById('cross-btn');
var navLinks = document.getElementsByClassName('nav-link');

function showMenu() {
    nav.classList.remove('small-hidden');
}

function hideMenu() {
    nav.classList.add('small-hidden');
}

menuButton.addEventListener('click', showMenu);
crossButton.addEventListener('click', hideMenu);
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', hideMenu);
}

function initMap() {
    var myLatLng = {lat: 28.648055, lng: 77.285799};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Address'
    });
}
