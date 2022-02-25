function preload(){

}
function setup(){
    canvas=createCanvas(550,550);
    canvas.position(525,185);
    video=createCapture(VIDEO);
    video.hide();
}
function take_snapshot(){
    save('student_name.png');
}
 function draw(){
    image(video,4,4,550,550);
}