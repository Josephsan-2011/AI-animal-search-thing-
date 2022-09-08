var video = ""
status1 = ""

function preload() {
//    video = createVideo("video.mp4")
}

function setup() {
    c1 = createCanvas(500, 450)
    c1.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw() {
    image(video, 0, 0, 500, 450)
}

function start() {
    object_detector = ml5.objectDetector("cocossd", model_loaded)
    document.getElementById("status").innerHTML = "status: DetectingObjects"
}

function model_loaded() {
    status1 = true
    video.loop()
    video.speed(1)
    video.volume(0.2)
}