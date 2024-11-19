var count = 0;
document.getElementById("textarea").addEventListener("keypress", function(e){
    count++;
    var text = e.key;
    document.getElementById("ptag").innerHTML = "count this letter " + count;
    // document.getElementById("ptag").innerHTML = "count this letter " + text;
})