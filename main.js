function setup(){
 canvas = createCanvas(400, 400);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(400, 400);
 video.hide();
 poseNet = ml5.poseNet(video, model_loaded);
 poseNet.on("pose", got_poses);
}
function draw(){
 image(video, 0, 0, 400, 400);
}
function take_photo(){
 save("selfie.png");
}
function model_loaded(){
 console.log("Model Loaded");
 console.log("PoseNet Initialised");
}
function got_poses(results){
 if(results.length > 0){
  console.log(results);
  console.log("Nose X = " + results[0].pose.nose.x + " Y = " + results[0].pose.nose.y);
 }
}