
// var images = document.getElementsByTagName("img")[0];
var head = document.getElementById("hello");

var heading = document.createElement("h2");
var text = document.createTextNode("Hello World");
heading.appendChild(text);

var heading2 = document.createElement("h3");
var text2 = document.createTextNode("Hello Bangladesh");
heading2.appendChild(text2);

var myDiv = document.getElementById("my_div");

var removePara = document.getElementById("myPara");

function handleClick() {
    head.innerHTML = "Sohel";
    head.style.backgroundColor = "red";
    head.style.textAlign = "center";
    head.style.color = "white";
    head.style.fontSize = "50px";
    head.style.textTransform = "uppercase";
    head.style.borderRadius = "10px";
    head.style.width = "200px"; 


    myDiv.appendChild(heading);

    myDiv.insertBefore(heading2,heading); // heading2 before heading

    myDiv.style.textAlign = "center";
    myDiv.style.backgroundColor = "green";
    myDiv.style.fontSize = "20px";
    myDiv.style.textTransform = "uppercase";
    myDiv.style.borderRadius = "10px";
    myDiv.style.width = "200px";
    myDiv.removeChild(removePara);

    // images.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png";
    // document.getElementsByClassName("hello")[0].innerHTML = "world";
}