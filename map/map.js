// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initialize() {
  var myLatlng = new google.maps.LatLng(63.417511, 10.4188995);
  var mapOptions = {
    zoom: 13,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var infowindow = new google.maps.InfoWindow();

  //NTNU Gløshaugen
  var contentStringGloeshaugen = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">NTNU Gløshaugen</h1>'+
		'<div id="bodyContent">'+
			'<p>Gløshaugen er et område ca. 2 km sørøst for Trondheim sentrum. I dag er Gløshaugen-platået best kjent som NTNUs største universitetsområde, campus NTNU Gløshaugen, med Hovedbygningen fra Norges tekniske høgskole (NTH) som et synlig landemerke fra flere steder i byen. Før NTH ble etablert, hadde området gjennom tidene vært brukt til både gårdsdrift, ekserserplass, landsteder og spesialskoler.</p>'+

			'<p>Kilde: Gløshaugen, <a href="http://no.wikipedia.org/wiki/Gl%C3%B8shaugen" target="blank">'+
			'http://no.wikipedia.org/wiki/Gløshaugen</a></p>'+
		'</div>'+
	'</div>';

  var markerGloeshaugen = new google.maps.Marker({
      position: new google.maps.LatLng(63.4164986, 10.4045159),
      map: map,
      title: 'NTNU Gløshaugen'
  });

  google.maps.event.addListener(markerGloeshaugen, 'click', function() {
  	infowindow.setContent(contentStringGloeshaugen);
    infowindow.open(map,this);
  });

  
  //NTNU Dragvoll
  var contentStringDragvoll = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">NTNU Dragvoll</h1>'+
		'<div id="bodyContent">'+
			'<p>Dragvoll (tidligere kalt Universitetssenteret Dragvoll) er et campusområde på Dragvoll i Trondheim som huser Det humanistiske fakultet (HF) og Fakultet for samfunnsvitenskap og teknologiledelse (SVT) ved NTNU. Før sammenslåingen til NTNU utgjorde Dragvoll en viktig del av AVH sammen med Rosenborg og Lade.</p>'+

			'<p>Kilde: Dragvoll, <a href="http://no.wikipedia.org/wiki/Dragvoll" target="blank">'+
			'http://no.wikipedia.org/wiki/Dragvoll</a></p>'+
		'</div>'+
	'</div>';

  var markerDragvoll = new google.maps.Marker({
      position: new google.maps.LatLng(63.4089983, 10.4708427),
      map: map,
      title: 'NTNU Dragvoll'
  });
  google.maps.event.addListener(markerDragvoll, 'click', function() {
  	infowindow.setContent(contentStringDragvoll);
    infowindow.open(map,markerDragvoll);
  });

  //Samfundet
  var contentStringSamfundet = 
	'<div id="content">'+
		'<div id="siteNotice">'+'</div>'+

		'<h1 id="firstHeading" class="firstHeading">Samfundet</h1>'+
		'<div id="bodyContent">'+
			'<p>Studentersamfundet i Trondhjem, ofte forkortet til Samfundet, er en organisasjon for studenter i Trondheim. Det ble stiftet 1. oktober 1910, og er det nest eldste studentsamfunnet i Norge. Organisasjonen holder til i sitt eget bygg i Elgeseter gate 1 på Vollan i Trondheim. Samfundets mest kjente virksomhetsområde er kanskje utestedsdriften av sitt eget hus, men det arrangerer også debatter, kino og egenproduserte teaterstykker, i tillegg til at det utgir avis og har sin egen TV- og radiokanal. Totalt ca. 1300 studenter jobber frivillig ved Samfundet, organisert i over 20 forskjellige ansvarsgrupper kalt gjenger. Studentersamfundets nåværende leder er Per Fridtjof Larssen.</p>'+

			'<p>Kilde: Samfundet, <a href="Studentersamfundet i Trondhjem" target="blank">'+
			'Studentersamfundet i Trondhjem</a></p>'+
		'</div>'+
	'</div>';

  var markerGloeshaugen = new google.maps.Marker({
      position: new google.maps.LatLng(63.42245,10.39557),
      map: map,
      title: 'NTNU Gløshaugen'
  });

  google.maps.event.addListener(markerGloeshaugen, 'click', function() {
  	infowindow.setContent(contentStringSamfundet);
    infowindow.open(map,this);
  });


}

google.maps.event.addDomListener(window, 'load', initialize);