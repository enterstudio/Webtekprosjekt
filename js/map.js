// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

//GPS-coordinates tool: http://www.gpsvisualizer.com/geocode
//Maps documentation: https://developers.google.com/maps/documentation/javascript/infowindows#add

var map;
var infowindow;

var contentStringGloeshaugen;
var contentStringDragvoll;
var contentStringSamfundet;
var contentStringNidarosdomen;
var contentStringIKEA;

var markerGloeshaugen;
var markerDragvoll;
var markerSamfundet;
var markerNidarosdomen;
var markerIKEA;

function initialize() {
  var myLatlng = new google.maps.LatLng(63.417511, 10.4188995);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  infowindow = new google.maps.InfoWindow();

  //NTNU Gløshaugen
  contentStringGloeshaugen = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">NTNU Gløshaugen</h1>'+
		'<div id="bodyContent">'+
			'<p>Gløshaugen er et område ca. 2 km sørøst for Trondheim sentrum. I dag er Gløshaugen-platået best kjent som NTNUs største universitetsområde, campus NTNU Gløshaugen, med Hovedbygningen fra Norges tekniske høgskole (NTH) som et synlig landemerke fra flere steder i byen. Før NTH ble etablert, hadde området gjennom tidene vært brukt til både gårdsdrift, ekserserplass, landsteder og spesialskoler.</p>'+

			'<p>Kilde: Gløshaugen, <a href="http://no.wikipedia.org/wiki/Gl%C3%B8shaugen" target="blank">'+
			'http://no.wikipedia.org/wiki/Gløshaugen</a></p>'+
		'</div>'+
	'</div>';

  markerGloeshaugen = new google.maps.Marker({
      position: new google.maps.LatLng(63.4164986, 10.4045159),
      map: map,
      title: 'NTNU Gløshaugen'
  });

  google.maps.event.addListener(markerGloeshaugen, 'click', function() {
  	infowindow.setContent(contentStringGloeshaugen);
    infowindow.open(map,this);
  });

  
  //NTNU Dragvoll
  contentStringDragvoll = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">NTNU Dragvoll</h1>'+
		'<div id="bodyContent">'+
			'<p>Dragvoll (tidligere kalt Universitetssenteret Dragvoll) er et campusområde på Dragvoll i Trondheim som huser Det humanistiske fakultet (HF) og Fakultet for samfunnsvitenskap og teknologiledelse (SVT) ved NTNU. Før sammenslåingen til NTNU utgjorde Dragvoll en viktig del av AVH sammen med Rosenborg og Lade.</p>'+

			'<p>Kilde: Dragvoll, <a href="http://no.wikipedia.org/wiki/Dragvoll" target="blank">'+
			'http://no.wikipedia.org/wiki/Dragvoll</a></p>'+
		'</div>'+
	'</div>';

  markerDragvoll = new google.maps.Marker({
      position: new google.maps.LatLng(63.4089983, 10.4708427),
      map: map,
      title: 'NTNU Dragvoll'
  });
  google.maps.event.addListener(markerDragvoll, 'click', function() {
  	infowindow.setContent(contentStringDragvoll);
    infowindow.open(map,markerDragvoll);
  });

  //Samfundet
  contentStringSamfundet = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">Samfundet</h1>'+
		'<div id="bodyContent">'+
			'<p>Studentersamfundet i Trondhjem, ofte forkortet til Samfundet, er en organisasjon for studenter i Trondheim. Det ble stiftet 1. oktober 1910, og er det nest eldste studentsamfunnet i Norge. Organisasjonen holder til i sitt eget bygg i Elgeseter gate 1 på Vollan i Trondheim. Samfundets mest kjente virksomhetsområde er kanskje utestedsdriften av sitt eget hus, men det arrangerer også debatter, kino og egenproduserte teaterstykker, i tillegg til at det utgir avis og har sin egen TV- og radiokanal. Totalt ca. 1300 studenter jobber frivillig ved Samfundet, organisert i over 20 forskjellige ansvarsgrupper kalt gjenger. Studentersamfundets nåværende leder er Per Fridtjof Larssen.</p>'+

			'<p>Kilde: Samfundet, <a href="http://no.wikipedia.org/wiki/Studentersamfundet_i_Trondhjem" target="blank">'+
			'http://no.wikipedia.org/wiki/Studentersamfundet_i_Trondhjem</a></p>'+
		'</div>'+
	'</div>';

  markerSamfundet = new google.maps.Marker({
      position: new google.maps.LatLng(63.42237,10.39625),
      map: map,
      title: 'Samfundet'
  });

  google.maps.event.addListener(markerSamfundet, 'click', function() {
    infowindow.setContent(contentStringSamfundet);
    infowindow.open(map,this);
  });

  //Nidarosdomen
  contentStringNidarosdomen = 
  '<div id="content">'+
    '<div id="siteNotice">'+'</div>'+

    '<h1 id="firstHeading" class="firstHeading">Nidarosdomen</h1>'+
    '<div id="bodyContent">'+
      '<p>Nidarosdomen i Trondheim, egentlig Nidaros domkirke, er Norges mest sentrale kirke, fordi den er Olav den helliges gravkirke. Den er i dag en luthersk domkirke og menighetskirke og betraktes både som Norges nasjonalhelligdom og som kroningskirke (selv om det ikke lenger foretas kongekroninger i Norge). I den norske Grunnloven av 1814 ble det slått fast at Kongeriket Norges regent skal krones i Trondheim. Nidarosdomen ble sist benyttet som kroningskirke i 1906, da Haakon VII ble kronet. Etter at Stortinget i 1908 avskaffet kroningsseremonien, har kirken vært brukt til signing av regenten. De norske kronregaliene har vært oppbevart i kirken og er nå utstilt i Erkebispegården like ved.</p>'+

      '<p>Kilde: Nidarosdomen, <a href="http://no.wikipedia.org/wiki/Nidarosdomen" target="blank">'+
      'http://no.wikipedia.org/wiki/Nidarosdomen</a></p>'+
    '</div>'+
  '</div>';

  markerNidarosdomen = new google.maps.Marker({
      position: new google.maps.LatLng(63.4269097, 10.3969374),
      map: map,
      title: 'Nidarosdomen'
  });

  google.maps.event.addListener(markerNidarosdomen, 'click', function() {
    infowindow.setContent(contentStringNidarosdomen);
    infowindow.open(map,this);
  });

  //IKEA
  //Nidarosdomen
  contentStringIKEA = 
  '<div id="content">'+
    '<div id="siteNotice">'+'</div>'+

    '<h1 id="firstHeading" class="firstHeading">IKEA</h1>'+
    '<div id="bodyContent">'+
      '<p>Hos IKEA finner man alt man trenger til hybelen.</p>'+

      '<p>Åpningstider:<br />Mandag til fredag: 10–22<br />Lørdag: 10–20</p>' +

      '<p>Kilde: IKEA Leangen, <a href="http://www.ikea.com/no/no/store/leangen/storeInfo" target="blank">'+
      'http://www.ikea.com/no/no/store/leangen/storeInfo</a></p>'+
    '</div>'+
  '</div>';

  markerIKEA = new google.maps.Marker({
      position: new google.maps.LatLng(63.42854,10.47299),
      map: map,
      title: 'IKEA Leangen'
  });

  google.maps.event.addListener(markerIKEA, 'click', function() {
    infowindow.setContent(contentStringIKEA);
    infowindow.open(map,this);
  });


}

google.maps.event.addDomListener(window, 'load', initialize);

function relocateToGloes() {
  var newCoord = new google.maps.LatLng(63.4164986, 10.4045159);
  var mapOptions = {
    zoom: 13,
    center: newCoord
  };
  map.setCenter(newCoord);
  infowindow.setContent(contentStringGloeshaugen);
  infowindow.open(map,markerGloeshaugen);
}

function relocateToDragvoll() {
  var newCoord = new google.maps.LatLng(63.4089983, 10.4708427);
  var mapOptions = {
    zoom: 13,
    center: newCoord
  };
  map.setCenter(newCoord);
  infowindow.setContent(contentStringDragvoll);
  infowindow.open(map,markerDragvoll);
}

function relocateToSamfundet() {
  var newCoord = new google.maps.LatLng(63.42237,10.39625);
  var mapOptions = {
    zoom: 13,
    center: newCoord
  };
  map.setCenter(newCoord);
  infowindow.setContent(contentStringSamfundet);
  infowindow.open(map,markerSamfundet);
}

function relocateToNidarosdomen() {
  var newCoord = new google.maps.LatLng(63.4269097, 10.3969374);
  var mapOptions = {
    zoom: 13,
    center: newCoord
  };
  map.setCenter(newCoord);
  infowindow.setContent(contentStringNidarosdomen);
  infowindow.open(map,markerNidarosdomen);
}

function relocateToIKEA() {
  var newCoord = new google.maps.LatLng(63.42854,10.47299);
  var mapOptions = {
    zoom: 13,
    center: newCoord
  };
  map.setCenter(newCoord);
  infowindow.setContent(contentStringIKEA);
  infowindow.open(map,markerIKEA);
}