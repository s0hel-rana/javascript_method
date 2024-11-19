var len = document.querySelectorAll(".myBtn").length;

for(var i = 0; i < len; i++){
    document.querySelectorAll(".myBtn")[i].addEventListener("click", function(){

        var text =this.innerHTML;
        audioPlay(text);
        playAnimation(text);

        
    });


    document.addEventListener("keypress", function(event){
        var text = event.key;
        audioPlay(text);
        playAnimation(text);
    });

    function audioPlay(text) {
        switch(text){
            case "a":
                document.querySelector("h1").innerHTML = text + " is play";
                var audio = new Audio('sounds/sound1.mp4');
                audio.play();
                break;
            case "b":
                document.querySelector("h1").innerHTML = text + " is play";
                var audio = new Audio('sounds/sound 2.mp4');
                audio.play();
                break;
            case "c":
                document.querySelector("h1").innerHTML = text + " is play";
                var audio = new Audio('sounds/sound 3.mp4');
                audio.play();
                break;
        }
        setTimeout(function() {
            if (audio) {
                audio.pause();
            }
        }, 10000);
    }

    function playAnimation(text) {
        var selectButton = document.querySelector("." + text);
        selectButton.classList.add("anim");

        setTimeout(function(){
            selectButton.classList.remove("anim");
        }, 10000);
    }
}