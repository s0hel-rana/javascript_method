var len = document.querySelectorAll(".myBtn").length;

for(var i = 0; i < len; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){

        var text =this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    });
}


// document.querySelectorAll(".myBtn")[1].addEventListener("click", function(){

//     var text =this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });

// document.querySelectorAll(".myBtn")[2].addEventListener("click", function(){

//     var text =this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is clicked";
// });