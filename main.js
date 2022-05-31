let canvas = document.getElementById("myCanvas");
let pen = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

let background = new Image();
background.onload = uploadBackground;
background.src = "car_race.gif"

function uploadBackground(){
    pen.drawImage(background_imgTag, 0,0, canvas.width, canvas.height);
}

function add(){
    let car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    let car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadcar1(){
    pen.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
    pen.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(event){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(event.keyCode==37){
        console.log("arrow left pressed");
        car1_left();
    }
    if(event.keyCode==38){
        console.log("arrow up pressed");
        car1_up();
    }
    if(event.keyCode==39){
        console.log("arrow right pressed");
        car1_right();
    }
    if(event.keyCode==40){
        console.log("arrow down pressed");
        car1_down();
    }
    if (event.keyCode == 87) {
        console.log("W pressed");
        car2_up();
    }
    if (event.keyCode == 83) {
        console.log("S pressed");
        car2_down();
    }
    if (event.keyCode == 65) {
        console.log("A pressed");
        car2_left();
    }
    if (event.keyCode == 68) {
        console.log("D pressed");
        car2_right();
    }
    if(car1_x > 700){
        console.log("Car 1 won");
        document.getElementById("game_status").innerHTML = "Car 1 Won !!!!";
    }
    if (car2_x > 700) {
        console.log("Car 2 won");
        document.getElementById("game_status").innerHTML = "Car 2 Won !!!!";
    }
}

function car1_up(){
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("when down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("when left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("when right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("when right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down() {
    if (car2_y <= 500) {
    car2_y = car2_y + 10;
    console.log("when down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
    }
}

function car2_left() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("when left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}