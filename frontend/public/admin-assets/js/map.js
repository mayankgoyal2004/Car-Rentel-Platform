/*
Author       : Dreamstechnologies
Template Name: Dreamsrent - Bootstrap Template
Version      : 1.0
*/

google.maps.visualRefresh = true;
var slider, infowindow = null;
var bounds = new google.maps.LatLngBounds();
var map, current = 0;
var locations =[{
	"id":"01",
	"car_name":"Ford Endeavour",
	"speciality":"Speed : 20/Kms",
	"lat":53.470692,
	"lng":-2.220328,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-01.jpg'
	}, {		
	"id":"02",
	"car_name":"Ferrari 458 MM",
	"speciality":"Speed : 25/Kms",
	"address":"Newyork, USA",
	"lat":53.469189,
	"lng":-2.199262,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-02.jpg'
	}, {
	"id":"03",
	"car_name":"Ford Mustang ",
	"speciality":"Speed : 19/Kms",
	"lat":53.468665,
	"lng":-2.189269,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-03.jpg'
	}, {
	"id":"04",
	"car_name":"Toyota Tacoma 4",
	"speciality":"Speed : 20/Kms",
	"lat":53.463894,
	"lng":-2.177880,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-04.jpg'
	}, {
	"id":"05",
	"car_name":"Chevrolet Pick Truck",
	"speciality":"Speed : 20/Kms",
	"lat":53.466359,
	"lng":-2.213314,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-05.jpg'
	}, {
	"id":"06",
	"car_name":"Etios Carmen",
	"speciality":"Speed : 20/Kms",
	"lat":53.463906,
	"lng":-2.213271,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-06.jpg'
	}, {
	"id":"07",
	"car_name":"Kia Soul 2016",
	"speciality":"Speed : 20/Kms",
	"lat":53.461974,
	"lng":-2.210661,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-07.jpg'
	}, {
	"id":"08",
	"car_name":"Chevrolet Camaro",
	"speciality":"Speed : 20/Kms",
	"lat":53.458785,
	"lng":-2.188532,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-08.jpg'
	}, {
	"id":"09",
	"car_name":"Toyota Camry SE 350",
	"speciality":"Speed : 20/Kms",
	"lat":53.4558571,
	"lng":-2.1950372,
	"icons":"default",
	"profile_link":"car-details.html",
	"image":'assets/img/car/car-09.jpg'
	}
];

var icons = {
  'default':'assets/img/icons/marker.svg'
};

function show() {
    infowindow.close();
  if (!map.slide) {
    return;
  }
    var next, marker;
    if (locations.length == 0 ) {
       return
     } else if (locations.length == 1 ) {
       next = 0;
     }
    if (locations.length >1) {
      do {
        next = Math.floor (Math.random()*locations.length);
      } while (next == current)
    }
    current = next;
    marker = locations[next];
    setInfo(marker);
    infowindow.open(map, marker);
}

function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        zoom: 14,
		center: new google.maps.LatLng(53.470692, -2.220328),
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		
    };
  
     map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.slide = true;

    setMarkers(map, locations);
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });
    google.maps.event.addListener(infowindow, 'closeclick',function(){
       infowindow.close();
    });
    slider = window.setTimeout(show, 3000);
}

function setInfo(marker) {
  var content = 
'<div class="card border-0 mb-0" style="width: 100%; display: inline-block;">'+
	'<div class="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">'+
		'<div class="d-flex align-items-center">'+
			'<a href="' + marker.profile_link + '" class="avatar flex-shrink-0 me-2avatar-rounded" tabindex="0" target="_blank">'+
				'<img class="img-fluid" alt="' + marker.car_name + '" src="' + marker.image + '">'+
			'</a>'+
			'<div class="ms-2">'+
				'<h6 class="fs-14 fw-semibold mb-1">'+
					'<a href="' + marker.profile_link + '" tabindex="0">' + marker.car_name + '</a>'+
				'</h6>'+
				'<p class="fs-13">' + marker.speciality + '</p>'+
			'</div>'+
		'</div>'+
		'<div>'+
			'<a  href="' + marker.profile_link + '" tabindex="0" class="text-decoration-underline fw-medium link-violet">View</a>'+
		'</div>'+
	'</div>'+
'</div>';
  infowindow.setContent(content);
}

function setMarkers(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    var item = markers[i];
    var latlng = new google.maps.LatLng(item.lat, item.lng);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        car_name: item.car_name,
        address: item.address,
        speciality: item.speciality,
        next_available: item.next_available,
        amount: item.amount,
        profile_link: item.profile_link,
        total_review: item.total_review,
        animation: google.maps.Animation.DROP,
        icon: icons[item.icons],
        image: item.image
        });
        bounds.extend(marker.position);
        markers[i] = marker;
        google.maps.event.addListener(marker, "click", function () {
            setInfo(this);
            infowindow.open(map, this);
            window.clearTimeout(slider);
        });
    }
    map.fitBounds(bounds);
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if (map.zoom > 16) map.slide = false;
  });
}

google.maps.event.addDomListener(window, 'load', initialize);