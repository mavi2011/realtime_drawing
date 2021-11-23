function setup(){
video=createCapture(VIDEO);
video.size(550, 500);
video.position(100, 150)

canvas=createCanvas(550, 550);
canvas.position(660, 150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log('Model Loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX= "+noseX+" noseY= "+noseY);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
        console.log("leftwristX= "+leftwristX+" rightwristX= "+rightwristX+" difference= "+difference);
    }
}

function draw(){
    background('#9981AA');
    document.getElementById("square_side").innerHTML="Width and Height of the square will be: "+difference+"px";
    fill('blue');
    stroke('yellow');
    square(noseX, noseY, difference);


}

noseX=0;
noseY=0;

difference=0;
rightwristX=0;
leftwristX=0;