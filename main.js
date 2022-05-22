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
        console.log("arrow up pressed");
        car2_up();
    }
}
