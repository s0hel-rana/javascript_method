var photos = ["image/image1.jpg","image/image2.jpg","image/image3.jpg"];
var imgTag = document.getElementsByTagName("img")[0];


var count = 0;
function next() {  
        count++;
        if(count >= photos.length){
            count = 0;
            imgTag.src = photos[count];
        }else{
            imgTag.src = photos[count];
        }
    
    }

    function prev() {  
        count--;
        if(count < 0){
            count = photos.length -1;
            imgTag.src = photos[count];
        }else{
            imgTag.src = photos[count];
        }
    }