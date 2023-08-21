function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelloaded);
    
    }
    var status="";
    
    function modelloaded(){
        console.log("READY");
        status=true;
        document.getElementById("status").innerHTML="status:finding stuff"
        objectDetector.detect(img,eee)
    }
    function eee(error,results){
     if(error){   console.log(error)
     }
    else{
        console.log(results)
    }
    }
    var img="";
    function preload(){
        img=loadImage("bed.jpeg");
    }
    function draw(){
        image(img,0,0,640,420);
    }