var head = document.getElementsByTagName("h1")[0];

document.getElementById("btn").addEventListener("mouseover", function(){
    head.classList.add("my-headeing");
});

document.getElementById("btn").addEventListener("mouseout", function(){
    head.classList.remove("my-headeing");
});
