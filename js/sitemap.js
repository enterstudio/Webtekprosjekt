xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","http://folk.ntnu.no/sigurdhg/sitemap.xml",false);
xmlhttp.send();
xmlDoc =xmlhttp.responseXML;

var categories = xmlDoc.getElementsByTagName("categories")[0];

var sitemap =  ""
var sitemapTag = document.getElementById("sitemap")
for(var i=0; i<categories.childNodes.length;i++){
	//Henter navn
	sitemap += "<li><a href='"+categories.childNodes[i].getAttribute("link")+"'>"
	sitemap += categories.childNodes[i].childNodes[0].textContent
	sitemap += "</a></li>"
	//Henter subpages
	var subpages = categories.childNodes[i].childNodes[1]
	if(subpages!=undefined){
		sitemap += "<ul>"
		for(var k=0;k<subpages.childNodes.length;k++){
			//Henter undersider
			sitemap += "<li><a href='"+subpages.childNodes[k].getAttribute("link")+"'>"
			sitemap += subpages.childNodes[k].childNodes[0].textContent
			sitemap += "</a></li>"		
		}
		sitemap += "</ul>"
	}
	sitemapTag.innerHTML = "<ul>"+"<li><a href='index.html'>"+"Hjem"+"</li>"+sitemap+"</a></ul>"
}
