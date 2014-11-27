var sum_utgifter = 0;

function sum() {
    var sum = 0;
    var budsjett = document.getElementById("budsjett").value;
    sum += parseInt(budsjett);
    sum -= sum_utgifter;
    document.getElementById("sum").innerHTML = "<p>" + sum + "</p>";
}

function ny_utgift() {
	var utgift_navn = document.getElementById("utgift_navn").value;
	var utgift = document.getElementById("utgift").value;
    
    if (utgift > 0 && utgift_navn != ""){
        var utgift_li = document.createElement("li");
        utgift_li.innerHTML = utgift_navn + ": " + utgift + ",-";
        document.getElementById("utgifter").appendChild(utgift_li);
        sum_utgifter += parseInt(utgift);
        document.getElementById("utgift_navn").value = "";
        document.getElementById("utgift").value = "";
		sum();
    }
}

function reset() {
    sum_utgifter = 0;
    var utgifter = document.getElementById("utgifter")
    document.getElementById("utgift_navn").value = "";
    document.getElementById("utgift").value = "";
    if(document.getElementById("sum").firstChild){
        document.getElementById("sum").removeChild(document.getElementById("sum").firstChild);
    }
    while (utgifter.firstChild) {
        utgifter.removeChild(utgifter.firstChild);
    }
	sum();
}


    