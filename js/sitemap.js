console.log("loaded");
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","http://folk.ntnu.no/sigurdhg/sitemap.xml",false);
xmlhttp.send();
xmlDoc =xmlhttp.responseXML;
console.log(xmlDoc);
