function preload(){}
nosex=0;
nosey=0;
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
}
function modelLoaded(){
    console.log("model is loaded");
}
function takesnapshot(){
    save("mustache.png");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
        console.log("nose x= "+nosex);
        console.log("nose y= "+nosey);
    }
}
