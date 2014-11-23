var table_content = document.getElementById("tablebody");

function sort_table(tbody, col) {
    var rows = tbody.rows,
        rlen = rows.length,
        arr = new Array(),
        i, j, cells, clen;
    for (i = 0; i < rlen; i++) {
        cells = rows[i].cells;
        clen = cells.length;
        arr[i] = new Array()
        for(j = 0; j < clen; j++) {
            arr[i][j] = cells[j].innerHTML;
        }
    }
    if (col > 0) {
    arr.sort(function (a, b) {return (a[col] - b[col])});
    } else {
    arr.sort();
    }
    
    for (i = 0; i < rlen; i++) {
        rows[i].innerHTML = "<td>" + arr[i].join("</td><td>") + "</td>";
    }
}

function sort1 () {
    sort_table(table_content, 1);
}
function sort2 () {
    sort_table(table_content, 2);
}
function sort3 () {
    sort_table(table_content, 3);
}
function sort4 () {
    sort_table(table_content, 4);
}
function sort5 () {
    sort_table(table_content, 5);
}
function sort6 () {
    sort_table(table_content, 6);
}
function sort7 () {
    sort_table(table_content, 7);
}
function sort8 () {
    sort_table(table_content, 8);
}

document.getElementById("sort-button-1").addEventListener("click", sort1);
document.getElementById("sort-button-2").addEventListener("click", sort2);
document.getElementById("sort-button-3").addEventListener("click", sort3);
document.getElementById("sort-button-4").addEventListener("click", sort4);
document.getElementById("sort-button-5").addEventListener("click", sort5);
document.getElementById("sort-button-6").addEventListener("click", sort6);
document.getElementById("sort-button-7").addEventListener("click", sort7);
document.getElementById("sort-button-8").addEventListener("click", sort8);

